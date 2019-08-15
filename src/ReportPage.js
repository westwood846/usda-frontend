import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Report from './Report';
import { getReport } from './actions';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.props.getReport(this.props.match.params.ndbno);
  }


  render() {
    return (
      <div className="ReportPage">
        <h1>{this.props.getReportResult ? `${this.props.getReportResult.desc.name}` : `Loading report for ndbno ${this.props.match.params.ndbno}`}</h1>
        <Report/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getReportResult: state.app.getReportResult
})

const mapDispatchToProps = {
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)
