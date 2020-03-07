import React from 'react';
import mapstatic from '../../assets/images/mapstatic.jpg';

var MapStyling = 
  {
    textAlign: 'center',
    fontFamily: 'didot',
    height: '600px',
    backgroundColor: "#F39622",
    padding: '54px'
  }

var buttonStyle= {
  backgroundColor: 'ghostwhite',
  color: 'black',
  fontSize: '16px',
  border: '2px solid orange',
  padding: '15px 34px',
  textAlign: 'center',
  margin: '17px',
  textDecoration: 'none',
  borderRadius: '20px',
  display: 'inline-block'
  
}


function Map() {
    return (
      <div style={MapStyling}>
        <div>
        <form>
            <input style={buttonStyle}
            type='text'
            id='location'
            placeholder='Enter a location'/>
            <button style={buttonStyle}>Go!</button>
        </form>
        <img src={mapstatic} height="533px" width="880px"/>
        </div>
      </div>
    );
  }
  
export default Map;