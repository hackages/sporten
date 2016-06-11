import React, { Component } from 'react';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const { players } = require('../mocks/players');
import Follower from './follower';

class Notifications extends Component{
  openChat(user) {
    this.props.navigator.push({
      title: `${user.firstName} ${user.lastName}`,
      component: PlayerView,
      passProps: { user }
    });
  }

 render() {
  return (
    <View>
      <View style={ styles.card }>
        <Text>Last minute game this evening</Text>
        <Text>20h-22h</Text>
      </View>

      <TouchableHighlight onPress={ this.openChat.bind(this, players[0].user) }>
        <View>
          <Follower { ...players[0] }/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={ this.openChat.bind(this, players[3].user) }>
        <View>
          <Follower { ...players[3] }/>
        </View>
      </TouchableHighlight>

      <View style={ styles.card }>
        <Text>Last minute game this evening</Text>
        <Text>20h-22h</Text>
      </View>

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


export default Notifications;
