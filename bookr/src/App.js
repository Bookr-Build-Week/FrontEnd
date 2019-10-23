import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CategoryPage from "./components/Dashboard/CategoryPage";
import TextBookCard from "./components/Dashboard/TextBookCard";
import TextBookList from "./components/Dashboard/TextBookList";
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
            <Route exact path="/category" component={CategoryPage}/>
            <Route exact path="/textbookcard" component={TextBookCard}/>
            <Route exact path="/textbooklist" component={TextBookList}/>
        </div>
      </Router>
    );
  }

export default App;
