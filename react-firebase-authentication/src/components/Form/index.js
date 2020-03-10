import React, { Component } from 'react';
import Firebase from 'firebase';
import birds from '../../assets/images/birds.jpg';
import 'firebase/database';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
// import firebase from 'firebase/app';
// import firebase from '../Firebase/Firebase';


var paddingStyle =
{
  padding: 100
}

var formStyle= {
  backgroundColor: 'rgba(125, 115, 114, 0.80)',
  height: '560px',
  fontFamily: 'sans-serif',
  color: 'black',
  fontSize: '16px',
  border: '2px solid orange',
  padding: '15px 34px',
  margin: '17px',
  borderRadius: '20px',
  display: 'inline-block'
}

var inputStyle =
{
  height: 30,
  width: 450,
  margin: '10px',
  padding: 8
}

var descriptionStyle =
{
  height: 80,
  width: 450,
  margin: '10px',
  padding: 8 
}

var buttonyStyle = 
{
  backgroundColor: 'orange',
  width: 101,
  textAlign: 'center',
  padding: 20,
  border: 'orange',
  borderRadius: '20px',
  fontSize: 15
}

class Form extends Component {
  constructor(props) {
    super(props);
    // let _species = null;
    // let _location = null;
    // let _date = null;
    // let _description = null;
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    // const logs = Firebase.database().ref('log');
    console.log("constructor is called.");

    // const config = {
    //   apiKey: process.env.REACT_APP_API_KEY,
    //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    //   databaseURL: process.env.REACT_APP_DATABASE_URL,
    //   projectId: process.env.REACT_APP_PROJECT_ID,
    //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // };
    // const { firebaseConfig } = config;
    // // if (!Firebase.apps.length) {
    //   console.log("initializing firebase now");
    //   Firebase.initializeApp(firebaseConfig);
    //   this.database = Firebase.database().ref('log');
    // // }
  }

   handleFormSubmission(event) {
    event.preventDefault();
    // const tickets = firebase.database().ref('log');
    
    var newSightingLog = Firebase.database().ref('log').push({
      species: document.getElementById('species').value,
      location: document.getElementById('location').value,
      date: document.getElementById('date').value,
      description: document.getElementById('description').value
    });
    console.log("REFERENCE LOCATION=" + newSightingLog.toString());

    return newSightingLog;
  }
  render() {
    return (
      <center>
      <div style={paddingStyle}>
        <style global jsx>{`
              body {
                background: url('${birds}');
              }
        `}</style>
          <form onSubmit={this.handleFormSubmission} style={formStyle}>
            <h2>DID YOU SPOT SOME WILDLIFE?</h2>
            <p>Fill out the form and add your sighting to our database!</p>
            <input style={inputStyle}
              type='text'
              id='species'
              placeholder='Species'
              ref={(input) => {this._species = input;}}/>
            <br/>
            <input style={inputStyle}
              type='text'
              id='location'
              placeholder='Location'
              ref={(input) => {this._location = input;}}/>
            <br/>
            <input style={inputStyle}
              type='text'
              id='date'
              placeholder='Date'
              ref={(input) => {this._date = input;}}/>
            <br/>
            <textarea style={descriptionStyle}
              id='description'
              placeholder='Describe the sighting.'
              ref={(textarea) => {this._description = textarea;}}/>
            <br/>
            <hr/>
            <br/>
            <center>
              <button style={buttonyStyle} type='submit'>SUBMIT</button>
            </center>
          </form>
      </div>
      </center>
    );
   }
}
  
export default Form;