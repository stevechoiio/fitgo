import React, { Component } from 'react';
import Layout from '../../routes/Layout';
import { Clients } from '../../api/clients';
import { withTracker } from 'meteor/react-meteor-data';
// import logo from '../../public/images/welcome.jpg';

class App extends Component {
  render() {
    console.log('from the');
    console.log(this.props);
    return (
      <div className='container'>
        <header>{/* <img src={logo} alt='logo' /> */}</header>
        <h1>
          {this.props.clients.map(a => (
            <h1>{a.name}</h1>
          ))}
        </h1>
        <Layout />
        <h1 />
        <ul />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    clients: Clients.find().fetch()
  };
})(App);
