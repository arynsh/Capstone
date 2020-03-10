
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navigation from '../Navigation';
import Map from '../Map';
import Form from '../Form';
import LandingPage from '../Landing';
import Logs from '../Logs';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   masterLogList: []
    // };
    // this.handleAddingNewLogToList = this.handleAddingNewLogToList.bind(this);
  }

//   handleAddingNewLogToList(newLog){
//     var newMasterLogList = this.state.masterLogList.slice();
//     newMasterLogList.push(newLog);
//     this.setState({masterLogList: newMasterLogList});
//   }

  render(){
      return (
        <Router>
          <Switch>
          <div>
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.FORM} component={Form} />
            <Route exact path={ROUTES.MAP} component={Map} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.LOGS} component={Logs} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
          </Switch>
        </Router>

      );
  }
}

export default App;