import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Home/Profile';
import { Switch, Route } from 'react-router-dom'
import PageNotFound from './Components/404/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Profile}/>
        <Route path="*" component={PageNotFound} />
      </Switch>
    )
  }
}