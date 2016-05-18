import React, { Component } from 'react';
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';
import '../css/app.css';

class Profile extends Component {
 render () {
   return (
     <div>
     <header>
       <div className='mdl-js-ripple-effect'>
        <img className='profile' src='../img/dave.jpg'/>
       </div>
     </header>
     <div className='sub-header'>
     </div>
     </div>
   );
 }
}

export default Profile;
