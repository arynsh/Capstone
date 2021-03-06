import React from 'react';
import { Link } from 'react-router-dom';
import titleimage from '../../assets/images/titleimage.jpg';

var LandingStyling = 
  {
    textAlign: 'center',
    fontFamily: 'monospace no. 20',
    backgroundColor: 'ghostwhite',
    color: 'black',
    height: '205px',
    // marginBottom: '72px',
    padding: '120px'
  }

  var LandingStyling:before =
  {
    bottom: 300,
    left: 300,
    borderBottom: '102px solid #F39622',
    borderLeft: '300px solid white',
    top: 300,
    right: 300,
    borderTop: '102px solid #F39622',
    borderRight: '300px solid white',
    width: 0
  }

var buttonStyle= {
  backgroundColor: 'orange',
  color: 'ghostwhite',
  fontSize: '15px',
  fontWeight: 'bold',
  border: '2px solid orange',
  padding: '10px 72px',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '20px',
  marginLeft: '403px',
  display: 'inline-block'
  
}

var name = 
{
  padding: '34px'
}

function Landing() {
    return (
      <div>
        {/* <style global jsx>{`
            body {
              background: url('${foresty}');
            }
      `}</style> */}
        <div style={LandingStyling}>
          <center>
            <div style={name}>
            <img src={titleimage} height="230px" width="620px"/>
            </div>
            <p style={buttonStyle}><Link to='/form'>LOG NEW WILDIFE SIGHTING</Link></p>
            </center>
        </div>
      </div>
    );
  }
  
  export default Landing;