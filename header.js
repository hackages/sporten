import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Tabs from './tabs';
import Profile from './profile';

const { height } = Dimensions.get('window');
const fullHeight = height;

class Header extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            Sporten ({fullHeight})
          </Text>
        </View>
        <View style={ styles.content }>
          <Tabs/>
        </View>
      </View>
    );
  }
}

const headerHeight = 80;
const contentHeight = fullHeight - headerHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: headerHeight,
    backgroundColor: '#ff0000'
  },
  headerText: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: '800'
  },
  content: {
    height: contentHeight,
  }
});

export default Header;
