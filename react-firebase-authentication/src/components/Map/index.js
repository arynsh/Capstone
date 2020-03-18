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

// import React, { Component, createRef } from 'react'

// var MapStyling = 
//   {
//     textAlign: 'center',
//     fontFamily: 'didot',
//     height: '600px',
//     backgroundColor: "#F39622",
//     padding: '54px'
//   }
// var buttonStyle= {
//   backgroundColor: 'ghostwhite',
//   color: 'black',
//   fontSize: '16px',
//   border: '2px solid orange',
//   padding: '15px 34px',
//   textAlign: 'center',
//   margin: '17px',
//   textDecoration: 'none',
//   borderRadius: '20px',
//   display: 'inline-block'
  
// }
 
// class GoogleMap extends Component {
//   googleMapRef = React.createRef()

//   componentDidMount() {
//     const googleMapScript = document.createElement('script')
//     googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
//     window.document.body.appendChild(googleScript)

//     googleScript.addEventListener('load', {
//       this.googleMap = this.createGoogleMap()
//       this.marker = this.createMarker()
//     })
//   }

//   createGoogleMap = () =>
//     new window.google.maps.Map(this.googleMapRef.current, {
//       zoom: 16,
//       center: {
//         lat: 43.642567,
//         lng: -79.387054,
//       },
//       disableDefaultUI: true,
//     })

//   createMarker = () =>
//     new window.google.maps.Marker({
//       position: { lat: 43.642567, lng: -79.387054 },
//       map: this.googleMap,
//     })

//   render() {
//     return (
//       <div
//         id="google-map"
//         ref={this.googleMapRef}
//         style={{ width: '400px', height: '300px' }}
//       />
//     )
//   }
// }