/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ComponentScreen from './src/screens/ComponentScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ComponentScreen);
