/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/index';
import Application from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Application);
