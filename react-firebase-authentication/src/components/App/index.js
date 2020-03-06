import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
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
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
          </Switch>
        </Router>

      );
  }
}

export default App;

// const App = () => (
//   <Router>
//     <div>
//       <Navigation />
//       <hr />
//       <Route exact path={ROUTES.LANDING} component={LandingPage} />
//       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//       {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
//       <Route path={ROUTES.HOME} component={HomePage} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ADMIN} component={AdminPage} />
//     </div>
//   </Router>
// );