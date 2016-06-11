import React, { Component } from 'react';
// import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import PlayerView from './PlayerView';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  PixelRatio,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const { players} = require('./mocks/players')

class MessageList extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }
  componentWillMount() {
    this.updateDataSource(players);
  }

  updateDataSource(data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  }

  openChat(user) {
    this.props.navigator.push({
      title: `${user.firstName} ${user.lastName}`,
      component: PlayerView,
      passProps: { user }
    });
  }

  renderRow(person) {
    const time = new moment(person.lastMessage.timestamp).fromNow();
    return (
      <View>
        <TouchableHighlight onPress={ this.openChat.bind(this, person.user) }>
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
        </TouchableHighlight>
      </View>
    );
  }

  render(){
    return (
      <View style={ styles.container }>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow.bind(this) } />
      </View>
    );
  }
}

class MessageTab extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.container }
        initialRoute={
          {
            title: 'Players',
            component: MessageList,
          }
        }
        />
    );
  }
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

export default MessageTab;
