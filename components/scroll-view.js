import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const users = require('../mocks/users').default;

import FacebookTabBar from './tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Events from './events';
import Follower from './follower';
import Notifications from './notifications';
// import Maps from './maps.js'

const { players } = require('../mocks/players');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollableTabView initialPage={1} renderTabBar={() => <FacebookTabBar />}>
        <ScrollView tabLabel="ios-apps" style={ styles.tabView }>
         <Notifications/>
        </ScrollView>
        <ScrollView tabLabel="ios-basketball" style={styles.tabView}>
          <View style={styles.card}>
            <Text></Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-person" style={ styles.tabView }>
         {players.map(player => <Follower key={ player.user.userID } {...player}/>)}
        </ScrollView>

        <ScrollView tabLabel="ios-settings" style={styles.tabView}>
          <View style={styles.card}>
            <Text></Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default App;
