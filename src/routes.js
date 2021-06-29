import React from 'react';
import FormPage from './pages/'; 
import ApprovedPage from './pages/approved'; 
import InvitePage from './pages/invite'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './assets/css/styles.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch> 
          <Route exact path="/" component={FormPage} />
          <Route exact path="/approved/:id/:fullname/:phone" component={ApprovedPage} />
          <Route exact path="/invite/:id" component={InvitePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
