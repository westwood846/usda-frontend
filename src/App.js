import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage';
import ReportPage from './ReportPage';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchPage}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/report/:ndbno" component={ReportPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
