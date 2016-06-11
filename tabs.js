import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
} from 'react-native';

import Header from './header';
import Profile from './profile';
import Players from './players';

class Tabs extends Component {
  constructor(){
    super();
    this.state = {
      selectedTab: 'home'
    }
  }

  changeTab(tabName) {
    StatusBar.setBarStyle(tabName === 'home' ? 1 : 0, true);
    this.setState({
      selectedTab: tabName
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Home'
          onPress={ () => this.changeTab('home') }
          selected={ this.state.selectedTab === 'home' }>
          <Players/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Me'
          onPress={ () => this.changeTab('messages') }
          selected={ this.state.selectedTab === 'messages' }>
          <Profile/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Games'
          onPress={ () => this.changeTab('settings') }
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
