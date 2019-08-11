import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css';

export class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
