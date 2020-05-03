import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearchPage from "./Search/SearchPage";
import ReportPage from "./Report/ReportPage";
import TablePage from "./Table/TablePage";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/report/:ndbno" component={ReportPage} />
          <Route path="/compare" component={TablePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
