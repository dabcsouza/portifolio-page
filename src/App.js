import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Home/Profile';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portifolio-page" component={Profile} />
        <Route exact path="/" component={Profile} />
      </Switch>
    </BrowserRouter>
    )
  }
}