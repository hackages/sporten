import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import eventsMocks from '../mocks/events';

const Event = (event) => {
  return (
    <View style={ styles.card }>
      <Text>{ event.title }</Text>
      <Text>{ event.date }</Text>
      <Text>{ event.where }</Text>
    </View>
  );
};

export default () => {
  return (
    <View>
      { eventsMocks.map(event => <Event key={event.id} {...event}/>) }
    </View>
  );
}

const styles = StyleSheet.create({
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

