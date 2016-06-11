import React from 'react';
import moment from 'moment';

import {
  Text,
  View,
  StyleSheet,
  Image,
  PixelRatio,
} from 'react-native'

export default (props) => {
  const { person } = props;
  const time = new moment(person.lastMessage.timestamp).fromNow();
  return (
      <View>
        <View style={ styles.row }>
          <Image
          source={ { uri: person.user.picture } }
          style={ styles.cellImage }
          />
          <View style={ styles.textContainer }>
            <Text style={ styles.name } numberOfLines={ 1 }>
              { person.user.firstName } { person.user.lastName }
            </Text>
            <Text style={ styles.time } numberOfLines={ 1 }>
              { time }
            </Text>
            <Text style={ styles.lastMessage } numberOfLines={ 1 }>
              { person.lastMessage.contents }
            </Text>
          </View>
         </View>
        <View style={ styles.cellBorder } />
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10
  },
  textContainer: {
    flex: 1
  },
  cellImage: {
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    width: 60
  },
  time: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 12,
    color: '#cccccc'
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2
  },
  lastMessage: {
    color: '#999999',
    fontSize: 12
  },
  cellBorder: {
    backgroundColor: '#F2F2F2',
    height: 1 / PixelRatio.get(),
    marginLeft: 4
  }
});


