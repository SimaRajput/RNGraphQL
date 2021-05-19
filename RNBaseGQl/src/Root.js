import React, { useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar, SafeAreaView, Text } from 'react-native';
import Navigator from './config/navigator';
import Constants from './constants';
import { Progress } from './components';
import { connect } from "react-redux";
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.White,
    flex: 1,
  }
});

const Root = (props) => {
  const { isConnected } = props;

  useEffect(() => {
    console.log("is connected value", isConnected);
    if (isConnected === false) {
      Toast.show({ text1: 'no internet' });
    }
  }, [isConnected])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {Platform.OS === 'android' && (
          <StatusBar backgroundColor={Constants.Colors.AccentColor} />
        )}
        <Progress />
        <Navigator />
      </View>
    </SafeAreaView>
  );
}

export default connect(({ network: { isConnected } }) => ({ isConnected }))(Root);
