
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';;
import { createStackNavigator } from '@react-navigation/stack';
import Constants from '../constants';
import { Image, StyleSheet } from 'react-native';
import ChangePassword from '../containers/auth/change-password';
import ForgotPassword from '../containers/auth/forgot-password';
import { Loader } from '../components';
import Login from '../containers/auth/Login';
import Signup from '../containers/auth/Signup';
import Welcome from '../containers/Welcome';
import Home from '../containers/home';
import Messages from '../containers/messages';
import More from '../containers/more';
import Profile from '../containers/profile';

const styles = StyleSheet.create({
  logo: {
    height: 25,
    width: 25,
  },
});


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App(props) {
  const [initialRoute, setInitialRoute] = useState('Home');
  

  function Dashboard() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#fff',
          activeTintColor: '#FF5B5B',
          inactiveBackgroundColor: '#fff',
          inactiveTintColor: 'gray',
          showIcon: true,
          style: Constants.BaseStyle.TAB_GROUP_STYLE,
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  source={Constants.Images.activehome}
                  style={styles.logo}
                />
              ) : (
                <Image
                  source={Constants.Images.home}
                  style={styles.logo}
                />
              ),
          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  source={Constants.Images.activeprofile}
                  style={styles.logo}
                />
              ) : (
                <Image
                  source={Constants.Images.profile}
                  style={styles.logo}
                />
              ),
          }} />
        <Tab.Screen name="Messages" component={Messages}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  source={Constants.Images.activemessage}
                  style={styles.logo}
                />
              ) : (
                <Image
                  source={Constants.Images.message}
                  style={styles.logo}
                />
              ),
          }} />
        <Tab.Screen name="More" component={More}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  source={Constants.Images.activemore}
                  style={styles.logo}
                />
              ) : (
                <Image
                  source={Constants.Images.more}
                  style={styles.logo}
                />
              ),
          }} />
      </Tab.Navigator>

    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Signup" component={Signup} 
          options={{
              headerShown: false,
            }}/>
          <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}
          options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Loader" component={Loader} />
          <Stack.Screen name="ChangePassword" component={ChangePassword}
          options={{
            headerShown: false,
          }} /> 
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;

