import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Tabs from './tabs';
import Header from './header';

class Sporten extends Component {
  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Sporten', () => Sporten);
