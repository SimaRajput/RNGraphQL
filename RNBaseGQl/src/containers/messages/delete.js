import React, { useState } from 'react';
import { View, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { Button, TextInput, NavButton } from '../../components';
import Constants from '../../constants';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });


const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        backgroundColor: Constants.Colors.WHITE,
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        alignItems: 'center',
        backgroundColor: Constants.Colors.BUTTON_COLOR,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '70%',
        alignSelf: 'center',
        marginTop: 40
    },
    textInput: {
        padding: 10
      }
});

const DeleteUser = ({ navigation }) => {

    
    let [inputUserId, setInputUserId] = useState('');

    let deleteUser = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [inputUserId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'User deleted successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('User'),
                                },
                            ],
                            { cancelable: false },
                        );
                    } else {
                        Alert.alert('Please insert a valid User Id');
                    }
                },
            );
        });
    };

    return (
        <SafeAreaView style={styles.main}>
            <NavButton text={"Delete"} onPress={()=> navigation.goBack()}/>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <TextInput
                        placeholder="Enter User Id"
                        onChangeText={(inputUserId) => setInputUserId(inputUserId)}
                        style={styles.textInput}
                    />
                    <Button title="Submit" onPress={deleteUser} style={styles.button} />
                </View>
            </View>
        </SafeAreaView>
    );
};


export default DeleteUser;