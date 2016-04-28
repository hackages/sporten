/**
 * Sample React Native App
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
import NavigationBar from 'react-native-navbar';
import Navigation from './components/navigation';

const Nav = () => {
 return (<View style={{ flex: 1, backgroundColor: '#ff9900', }}>
         <NavigationBar
        title={{ title: 'Title', }}
        leftButton={{ title: 'Back', }}
        rightButton={{ title: 'Forward', }} />
      </View>);
};

class sporten extends Component {
  render() {
    return (
      <Navigation/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sporten', () => sporten);
