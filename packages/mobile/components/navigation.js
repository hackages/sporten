
import React from 'react-native';
const {
  AppRegistry,
  Component,
  Text,
  View
} = React;
import NavigationBar from 'react-native-navbar';
import Pickachu from './pickachu';
import Charmander from './charmander';
import Bulbazavr from './blubazavr';

export default class CustomElements extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
        <NavigationBar
          title={<Pickachu/>}
          leftButton={
            <Charmander
              style={{ marginLeft: 8 }}
              onPress={() => alert('Charmandeeeer!')}/>}
          rightButton={
            <Bulbazavr
              style={{ marginRight: 8 }}
              onPress={() => alert('Bulbazaaaavr!')}/>} />
      </View>
    );
  }
}
