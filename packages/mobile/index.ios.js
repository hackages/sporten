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
  View,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

import App from './components/';
import Profile from './components/profile';
import Navigation from './components/navigation';
// import Events from './components/events.js';
import Maps from './components/maps';
import ListItem from './components/listItem';
import ListView from './components/listview';
import LV from './components/lv';
import Realm from 'realm';

const Event = {
  tile: 'Basketball On Sunday',
  max: 15,
  price: 4,
  attendees: []
};

const User = {
  name: 'Davy Engone',
  email: 'davy@hackages.io',
  num: 7,
  sports: ['Basket', 'Tenis']
};

const Nav = () => {
  return (
    <NavigatorIOS
      initialRoute={{
        component: Profile,
        title: 'Events',
        passProps: { myProp: 'foo' },
      }}
    />
  );
};



class sporten extends Component {
  join () {
    Event.attendees = [User.email, ...Event.attendees];
    console.log(Event);
  }

  cancel () {

  }

  render () {
    return (
      <View>
       <Navigation/>
       <TouchableHighlight onPress={this.join.bind(this)}>
        <Text>Join</Text>
       </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('sporten', () => sporten);
