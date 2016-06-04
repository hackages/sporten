import React from 'react-native';
import eventsMocks from './mocks/events';
import CardView from './components/CardView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './header';

const [game] = eventsMocks;

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;

// <AnimatedProgressView />
const EventDetails = () => {
  return (
    <View style={styles.eventdetails}>
      <Text style={styles.welcome}>
         Event: {game.title}
      </Text>
      <Text style={styles.welcome}>
         When: {game.date}
      </Text>
      <Text style={styles.welcome}>
         Where: {game.where}
      </Text>
      <Text style={styles.welcome}>
         Organizer: {game.organizers[0]}
      </Text>
    </View>
  );
};

const EventAttendees = () => {
  return <Text>Event details</Text>;
};

const EventActionButtons = () => {
  return (
    <Text style={styles.icons}>
      <Icon name="grade" size={15} />
    </Text>
  );
};



const Event = React.createClass({
  render() {
    return (
      <View title='Sunday Basketball'>
       <Header/>
       <EventActionButtons/>
       <EventAttendees/>
      </View>
    );
  }
});

// <View style={styles.header}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(player) => <Text>{player.name}</Text>}
//           />
//       </View>
//

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1
  },
  header: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 70
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "800"
  },
  icons: {
    letterSpacing: 15,
    color: '#999898',
    margin: 10
  },
});

export default Event;
