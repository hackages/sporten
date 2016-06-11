/**
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
//
// // import Login from './components/login';
import Main from './components/scroll-view';
// import Profile from './components/profile';
// import Activities from './components/activities';
// import ScrollableTabs from './components/scrollable-tabs';
// import Facebook from './components/facebook';

const Sporten = () => <Main/>;
//
AppRegistry.registerComponent('Sporten', () => Sporten);
