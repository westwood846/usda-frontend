import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage';
import ReportPage from './ReportPage';

export class App extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      // <Router>
        <div className="App">
          {/* <SearchBar/>
          <SearchResult/>
          <Report/> */}
          <Link to="/search/">Search</Link>
          <Link to="/report/123">Report</Link>
          <button onClick={() => console.log(this.props.state)}>Dump State</button>
          <Switch>
            <Route path="/" exact component={SearchPage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/report/:ndbno" component={ReportPage}/>
          </Switch>
        </div>
      // </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
