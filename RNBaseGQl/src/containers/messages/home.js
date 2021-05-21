import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, RefreshControl } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Constants from '../../constants';
import { NavButton } from '../../components';



const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.Colors.WHITE,
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listView: {
        backgroundColor: 'white',
        padding: 20
    },
    seprator: {
        height: 0.2,
        width: '100%',
        backgroundColor: '#808080'
    },
    noData: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        marginTop: 200
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

const User = ({ navigation }) => {
    let [flatListItems, setFlatListItems] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


  const errorCB=(err)=> {
    console.log("SQL Error: " + err);
  }

  const successCB=()=> {
    console.log("SQL executed fine");
  }

  const openCB=(res)=> {
    console.log("Database OPENED",res);
  }

    var db = openDatabase({ name: 'UserDatabase.db' },openCB, errorCB);
console.log(db,'db')

    useEffect(() => {
        onRefresh();
    }, []);


    const onRefresh =  () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
                console.log('result',results)
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setFlatListItems(temp);
                setRefreshing(false)
            });
        });
    };

    let listViewItemSeparator = () => {
        return (
            <View
                style={styles.seprator}
            />
        );
    };




    let listItemView = (item) => {
        return (
            <View
                key={item.user_id}
                style={styles.listView}>
                <Text>Id: {item.user_id}</Text>
                <Text>Name: {item.user_name}</Text>
                <Text>Contact: {item.user_contact}</Text>
                <Text>Address: {item.user_address}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.main}>
            <NavButton text={"All Users"} onPress={()=> navigation.goBack()}/>
            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={() => <View style={styles.noData}><Text style={styles.text}>No Data Found</Text></View>}
            />
        </SafeAreaView>
    );
};

export default User;