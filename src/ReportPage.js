import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Report from './Report';

class ReportPage extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div className="ReportPage">
        <h1>ReportPage</h1>
        <Report/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)
