import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { Button, TextInput, NavButton } from '../../components';
import Constants from '../../constants';

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
    marginTop: 40
  },
  textInput: {
    padding: 10
  }
});



const Register = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  var db = openDatabase({ name: 'UserDatabase.db',createFromLocation : "~example.db", location: 'Library' } ,openCB, errorCB);

  const register_user = () => {
    console.log(userName, userContact, userAddress);

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

    db.transaction(function (tx) {

      console.log('tx',tx.executeSql,tx.params)
      try{
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('User'),
                },
              ],
              { cancelable: false },
            );
          } 
          
          else Alert.alert('Registration Failed');
        },
      );
      }
      catch(error){
        console.log('error',error)
      }
    });
  };


  const errorCB=(err)=> {
    console.log("SQL Error: " + err);
  }

  const successCB=()=> {
    console.log("SQL executed fine");
  }

  const openCB=()=> {
    console.log("Database OPENED");
  }


  return (
    <SafeAreaView style={styles.main}>
      <NavButton text={"Register"} onPress={()=> navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <TextInput
                placeholder="Enter Name"
                onChangeText={setUserName}
                style={styles.textInput}
                value={userName}
              />
              <TextInput
                placeholder="Enter Contact No"
                onChangeText={setUserContact}
                maxLength={10}
                keyboardType="numeric"
                style={styles.textInput}
                value={userContact}
              />
              <TextInput
                placeholder="Enter Address"
                onChangeText={setUserAddress}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                value={userAddress}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Button title="Submit" onPress={register_user} style={styles.button} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;