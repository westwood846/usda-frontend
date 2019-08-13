import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import './SearchBar';
import SearchBar from './SearchBar';

export class App extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
