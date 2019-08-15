import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from './Breadcrumbs';
import { getReport } from './actions';

class Report extends Component {
  render() {
    return (
      <div className="Report">
        <Breadcrumbs/>
        <pre>
          <code>
            {this.props.getReportResult && JSON.stringify(this.props.getReportResult, null, 2)}
          </code>
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gettingReport: state.app.gettingReport,
  getReportNDBNO: state.app.getReportNDBNO,
  getReportResult: state.app.getReportResult,
  getReportError: state.app.getReportError
})

const mapDispatchToProps = {
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
