import React from 'react';

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
  border: '2px solid orange',
  padding: '10px 20px',
  textAlign: 'center',
  margin: '12px',
  textDecoration: 'none',
  borderRadius: '20px',
  display: 'inline-block',
  fontWeight: 'bold'
  
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
        </div>
      </div>
    );
  }
  
export default Map;