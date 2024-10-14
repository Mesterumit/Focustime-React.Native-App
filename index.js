import { AppRegistry } from 'react-native';
import App from './App'; // assuming your App.js is in the same directory
import { name as appName } from './app.json'; // this file is auto-generated when you create a React Native project

AppRegistry.registerComponent(appName, () => App);
