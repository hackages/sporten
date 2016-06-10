import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Header from './header';
import Profile from './profile';

class Tabs extends Component {
  constructor(){
    super();
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Home'
          selected={ this.state.selectedTab === 'home' }>
          <View style={ styles.pageView }>
            <Text>Face Mash</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Me'
          selected={ this.state.selectedTab === 'messages' }>
          <Profile/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Games'
          selected={ this.state.selectedTab === 'settings' }>
          <View style={ styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default Tabs;
