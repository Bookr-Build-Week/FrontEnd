import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FilterPage from "./components/Dashboard/FilterPage";
import Nav from './components/Nav';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

  function App() {
    return (
      // <Router>
      //   <div className="App">
      //     <Nav/>
      //     <Switch>
      //       <PrivateRoute exact path="/protected" />
      //       <Route path="/login" component={Login} />
      //       <Route component={Login} />
      //       <Route path="/register" component={RegisterForm}/>
      //       <Route component={RegisterForm} />
      //     </Switch>
      //   </div>
      // </Router>

      <Router>
        <div className="App">
          <Nav/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/filterpage" component={FilterPage}/>
        </div>
      </Router>
    );
  }

export default App;
