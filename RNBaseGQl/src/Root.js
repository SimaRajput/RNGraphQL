import React from 'react';
import { StyleSheet, View, Platform, StatusBar, SafeAreaView, Text } from 'react-native';
import Navigator from './config/navigator';
import Constants from './constants';
import { Progress } from './components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.White,
    flex: 1,
  }
});

const Root = () => (
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

export default Root;
