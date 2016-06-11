import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default React.createClass({
  render() {
    return <ScrollableTabView
      style={styles.container}
      renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
      tabBarPosition='overlayTop'
    >
      <ScrollView tabLabel='Followers'>
        <Icon name='ios-add-circle' color='#DBDDDE' size={100} style={styles.icon} />
        <Icon name='ios-map' color='#DBDDDE' size={100} style={styles.icon} />
        <Icon name='ios-logo' color='#DBDDDE' size={100} style={styles.icon} />
      </ScrollView>
      <ScrollView tabLabel='Following'>
        <Icon name='ios-add' color='#A4C639' size={100} style={styles.icon} />
        <Icon name='ios-map' color='#A4C639' size={100} style={styles.icon} />
        <Icon name='ios-add' color='#A4C639' size={100} style={styles.icon} />
      </ScrollView>
    </ScrollableTabView>;
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  icon: {
    width: 300,
    height: 100,
    alignSelf: 'center',
  },
});
