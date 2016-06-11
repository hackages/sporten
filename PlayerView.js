import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MessageView extends Component {
  render() {
    const user = this.props.user;
    return (
      <View style={ styles.container }>
        <Text>Chat with { user.firstName } { user.lastName }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64,
  },
});

export default MessageView;
