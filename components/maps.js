import React, { Component } from 'react';
import GoogleStaticMap from 'react-native-google-static-map';

class Maps extends Component {
  render() {
    return (
        <GoogleStaticMap 
            style={styles.map} {...locationProps} 
            latitude={'32.064171'}
            longitude={'34.7748068'}
            zoom={13}
            size={{ width: 300, height: 550 }}
        />
    );
  }
}

export default Maps;
