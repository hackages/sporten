import React from 'react';
import Login from 'react-facebook-login';
import { hashHistory } from 'react-router';

const onLogin = (userInfo) => {
  // For production use browerHistory
  // browserHistory.push('#/profile');
  if(localStorage) {
    localStorage.userInfo = JSON.stringify(userInfo);
  }

  hashHistory.push('/events');
};


const App = () =>  {
  return <Login
           appId="1703770486538476"
           autoLoad={ true }
           callback={ onLogin }
           scope="public_profile, user_events"
           />
};

export default App;
