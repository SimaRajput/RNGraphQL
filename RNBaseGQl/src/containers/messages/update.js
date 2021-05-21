import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Button, TextInput, NavButton } from '../../components';
import Constants from '../../constants';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'Demo.db' });


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
  textStyle: {
    ...Constants.Fonts.extraLargeBold,
    color: Constants.Colors.BLACK,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
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
    marginTop: 40,

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const Update = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_contact, res.user_address);
          } else {
            Alert.alert('No user found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };

  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      Alert.alert('Please fill User id');
      return;
    }
    if (!userName) {
      Alert.alert('Please fill name');
      return;
    }
    if (!userContact) {
      Alert.alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      Alert.alert('Please fill Address');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('User'),
                },
              ],
              { cancelable: false },
            );
          } else Alert.alert('Updation Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <NavButton text={"Update"} onPress={()=> navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <TextInput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              />
              <Button title="Search User" onPress={searchUser} style={styles.button} />
              <TextInput
                placeholder="Enter Name"
                value={userName}
                style={styles.textInput}
                onChangeText={(userName) => setUserName(userName)}
              />
              <TextInput
                placeholder="Enter Contact No"
                value={'' + userContact}
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                style={styles.textInput}
                keyboardType="numeric"
              />
              <TextInput
                value={userAddress}
                placeholder="Enter Address"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Button title="Submit" onPress={updateUser} style={styles.button} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Update;