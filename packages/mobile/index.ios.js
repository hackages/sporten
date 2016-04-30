/**
 * Sporten built with React Native
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/';
import Profile from './components/profile';

class sporten extends Component {
  render() {
    return (
      <View>
       <Profile/>
      </View>
    );
  }
}

AppRegistry.registerComponent('sporten', () => sporten);
