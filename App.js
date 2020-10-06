import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Recipe from './Recipe';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Crabsalad from './Crabsalad';
import Capresesalad from './Capresesalad';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      

     <Navbar/>
     <Footer/>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/recipe" component={Recipe}/>
      <Route path="/crabsalad" component={Crabsalad}/>  
      <Route path="/capresesalad" component={Capresesalad}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
