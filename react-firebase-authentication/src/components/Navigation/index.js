import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

var linkStyleRight = 
  {
    marginTop: '23px',
    paddingRight: '20px',
    textDecoration: 'none',
    float: 'right',
    fontSize: '16px',
    fontFamily: 'monospace no. 20'
  }


function Navigation() {
  return ( 
      <div style={linkStyleRight}>
            <Link to={ROUTES.HOME} style={{ textDecoration: 'none', color: 'black' }}>Home</Link> | <Link to={ROUTES.HOME} style={{ textDecoration: 'none', color: 'black' }}>About</Link> | <Link to={ROUTES.LOGS} style={{ textDecoration: 'none', color: 'black' }}>See All Sightings</Link> |  <Link to={ROUTES.MAP} style={{ textDecoration: 'none', color: 'black' }}>See Map</Link> |  <Link to={ROUTES.FORM} style={{ textDecoration: 'none' , color: 'black'}}>Submit Sightings</Link> | <Link to={ROUTES.ACCOUNT} style={{ textDecoration: 'none', color: 'black' }}>Your Account</Link>  
      </div>
    );
  }
export default Navigation;