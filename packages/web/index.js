import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import ProfilePage from './components/profile';
import EventsPage from './components/events';
import NoMatchPage from './components/noMatch';
import App from './components/app';
import EventDetailsPage from './components/event';

const Main = () => {
  return (
    <Router history={ hashHistory }>
       <Route path="/" component={ ProfilePage }/>
       <Route path="/profile" component={ ProfilePage }/>
       <Route path="/events" component={ EventsPage }/>
       <Route path="/event" component={ EventDetailsPage }/>
       <Route path="*" component={ NoMatchPage }/>
    </Router>
  );
};

ReactDom.render(<Main/>, document.getElementById('sporten'));

export default App;
