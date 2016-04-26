import React, { Component } from 'react';
import { Link } from 'react-router';
import xhr from 'xhr';

class Events extends Component{
  componentWillMount(){
    const userInfo = JSON.parse(localStorage.userInfo);
    const url = `https://graph.facebook.com/${userInfo.id}/events?access_token=${userInfo.accessToken}`;

    xhr({
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      url,
    }, (error, response) => {
      this.setState({
        events: JSON.parse(response.body).data
      });
    });
  }
  render() {
    let events;
    if(this.state && this.state.events) {
      events = this.state.events.map(data => <Event event={data} key={data.id} />);
    }

    return (
      <section>
      <h2>Your games</h2>
      {events}
      </section>
    );
  }
}

const Event = ({event}) => {
  return <Link to="/event">{event.name}</Link>;
};

export default Events;

