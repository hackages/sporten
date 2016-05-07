/**
* App component
* */
import React, {
  Component,
  View,
  Navigator,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { get } from 'Dimensions';
import Carousel from './carousel';
import Button from 'react-native-button';

const { width, height } = get('window');

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image onClick={() => console.log('clicking image')} source={require('../assets/sporten.jpg')} style={styles.icon}/>
      </View>
      <View>
        <Carousel/>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0281C3',
    height: height/3,
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginTop: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'transparent',
  },
  icon: {
    marginTop: 40,
    height: 150,
    width: 300,
    alignSelf: 'center'
  },
  buttonStyle: {
    fontSize: 20,
    color: 'green',
  },
});

export default App;


