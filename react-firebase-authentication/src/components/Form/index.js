import React from 'react';
import birds from '../../assets/images/birds.jpg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Firebase from 'firebase';


firebase.initializeApp(config);

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
  width: 350,
  margin: '10px',
  padding: 8
}

var descriptionStyle =
{
  height: 60,
  width: 350,
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

function Form() {
  let _species = null;
  let _location = null;
  let _date = null;
  let _description = null;
  

  function handleFormSubmission(event) {
    event.preventDefault();
  //   props.onNewTicketCreation({species: _species.value, location: _location.value, date: _date.value, description: _description.value, id: v4(),timeOpen: new Moment()});
    _species.value = '';
    _location.value = '';
    _date.value = '';
    _description.value = '';
  }

  return (
    <center>
    <div style={paddingStyle}>
      <style global jsx>{`
            body {
              background: url('${birds}');
            }
      `}</style>
        <form onSubmit={handleFormSubmission} style={formStyle}>
          <h2>DID YOU SPOT SOME WILDLIFE?</h2>
          <p>Fill out the form and add your sighting to our database!</p>
          <input style={inputStyle}
            type='text'
            id='species'
            placeholder='Species'
            ref={(input) => {_species = input;}}/>
          <br/>
          <input style={inputStyle}
            type='text'
            id='location'
            placeholder='Location'
            ref={(input) => {_location = input;}}/>
          <br/>
          <input style={inputStyle}
            type='text'
            id='date'
            placeholder='Date'
            ref={(input) => {_date = input;}}/>
          <br/>
          <textarea style={descriptionStyle}
            id='description'
            placeholder='Describe the sighting.'
            ref={(textarea) => {_description = textarea;}}/>
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
  
export default Form;