import React from 'react';
import titleimage from '../../assets/images/titleimage.jpg';

var LandingStyling = 
  {
    textAlign: 'center',
    fontFamily: 'monospace no. 20',
    color: 'black',
    height: '270px',
    padding: '54px'
  }

// var boxStyling =
// {
//   backgroundColor: 'rgba(180,100,104, 0.35)',
//   margin: '0',
//   position: 'absolute',
//   fontFamily: 'didot',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   padding: '34px',
//   color: 'ghostwhite'
// }
var buttonStyle= {
  backgroundColor: 'orange',
  color: 'black',
  border: '2px solid orange',
  padding: '10px 20px',
  textAlign: 'center',
  margin: '12px',
  textDecoration: 'none',
  borderRadius: '20px',
  display: 'inline-block'
  
}


function Landing() {
    return (
      <div style={LandingStyling}>
        
        <div>
        {/* <style global jsx>{`
          body {
            background: url('${backgroundspots}');
          }
        `}</style> */}
          <img src={titleimage} height="200px" width="470px"/>
          
          <p>Spotted an eagle? A river otter? Mountain Lion? Log and track your wildlife sightings and see what others' have spotted in your area!</p>
          <button style={buttonStyle}>CREATE A NEW SIGHTING</button>
        </div>
       {/* <div style={boxStyling}>
                <h1 class="title">
                    <p>Have you spotted wildlife?</p>
                </h1>
                <p>Click to create a new sighting.</p>
                <button style={linkStyle}>Click me</button>
                <hr/>
                <h1 class="title">
                    <p>Enter location to see all sightings in your area!</p>
                    <form>
                        <input
                        type='text'
                        id='location'
                        placeholder='Location'
                        ref={(input) => {_location = input;}}/>
                        <button type='submit'>Go!</button>
                    </form>
                </h1>
       </div> */}
      </div>
    );
  }
  
  export default Landing;