import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from '../../constants';
import { Button,NavButton } from '../../components'

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
  button: {
    height: 50,
    alignItems: 'center',
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    top: 10

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const Messages = ({ navigation }) =>{

  return(
  <View style={styles.container}>
    <NavButton hideIcon text={"Home"}/>
    <View style={styles.itemContainer}>
      <Text style={styles.text}> React Native SqL Lite Storage Example </Text>
      <Button
        title="View User"
        onPress={() => navigation.navigate('User')}
        style={styles.button}
      />

      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
        style={[styles.button, { marginTop: 20 }]}
      />
      <Button
        title="Delete"
        onPress={() => navigation.navigate('Delete')}
        style={[styles.button, { marginTop: 20 }]}
      />
      <Button
        title="Update"
        onPress={() => navigation.navigate('Update')}
        style={[styles.button, { marginTop: 20 }]}
      />
    </View>
  </View>
  );
}
 

  

export default Messages;



