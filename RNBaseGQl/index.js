/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import Application from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => Application);
