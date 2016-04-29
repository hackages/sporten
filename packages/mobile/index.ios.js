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

class sporten extends Component {
  render() {
    return (
      <View>
       <App/>
      </View>
    );
  }
}

AppRegistry.registerComponent('sporten', () => sporten);
