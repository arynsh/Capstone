import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

var padding =
{
  paddingBottom: '50px'
}

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
    // <div style={padding}>
      <div style={linkStyleRight}>
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none', color: 'black' }}>Sign In</Link> |  <Link to={ROUTES.HOME} style={{ textDecoration: 'none', color: 'black' }}>About</Link> |  <Link to={ROUTES.MAP} style={{ textDecoration: 'none', color: 'black' }}>See Map</Link> |  <Link to={ROUTES.FORM} style={{ textDecoration: 'none' , color: 'black'}}>Submit Sightings</Link> | <Link to={ROUTES.ACCOUNT} style={{ textDecoration: 'none', color: 'black' }}>Your account</Link>  
      </div>
    // </div>
    );
  }
export default Navigation;