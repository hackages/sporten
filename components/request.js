import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Player from './player';

const swipeoutBtns = [
  {
    text: 'Accept',
  },
  {
    text: 'Refuse',
  }
];

export default (props) => {
  const message = props.message || 'wants to follow you';
  return (
    <Swipeout right={ swipeoutBtns }>
      <Player person={ props }/>
    </Swipeout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 1,
    marginTop: 1,
    height: 40,
    padding: 1,
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
  }
});
