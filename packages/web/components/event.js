import React from 'react';
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';

const EventPage = () => {
  const currentUser = JSON.parse(localStorage.userInfo);
  const currentEvent = {};

  // 1 button: Join
  // 1 button: cancel
  // How many spots left
  const join = () => {
    console.log('you joined the event');
  };

  return (
   <div>
     <button onClick={join}  className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i className="material-icons">+</i>
     </button>
   </div>
  );
};

export default EventPage;
