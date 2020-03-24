// import React from 'react';
// import mapstatic from '../../assets/images/mapstatic.jpg';

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


// function Map() {
//     return (
//       <div style={MapStyling}>
//         <div>
//         <form>
//             <input style={buttonStyle}
//             type='text'
//             id='location'
//             placeholder='Enter a location'/>
//             <button style={buttonStyle}>Go!</button>
//         </form>
//         <img src={mapstatic} height="533px" width="880px"/>
//         </div>
//       </div>
      
//     );
//   }
  
// export default Map;

import React, { Component, createRef } from 'react'

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
 
// class GoogleMap extends Component {
  // googleMapRef = React.createRef()

    // Initialize and add the map
  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  

  // componentDidMount() {
  //   const googleMapScript = document.createElement('script')
  //   googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
  //   window.document.body.appendChild(googleScript)

  //   googleScript.addEventListener('load', {
  //     this.googleMap = this.createGoogleMap()
  //     this.marker = this.createMarker()
  //   })
  // }

  // createGoogleMap = () =>
  //   new window.google.maps.Map(this.googleMapRef.current, {
  //     zoom: 16,
  //     center: {
  //       lat: 43.642567,
  //       lng: -79.387054,
  //     },
  //     disableDefaultUI: true,
  //   })

  // createMarker = () =>
  //   new window.google.maps.Marker({
  //     position: { lat: 43.642567, lng: -79.387054 },
  //     map: this.googleMap,
  //   })

    return (
      <div>
        <h3>My Google Maps Demo</h3>

        <div id="map"></div>

        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap">
        </script>
      </div>
    )
  }


export default initMap;