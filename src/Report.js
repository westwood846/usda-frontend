import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from './Breadcrumbs';

class Report extends Component {
  render() {
    return (
      <div className="Report">
        <Breadcrumbs/>
        <pre>
          <code>
            {JSON.stringify(this.props, null, 2)}
          </code>
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gettingReport: state.gettingReport,
  getReportNDBNO: state.getReportNDBNO,
  getReportResult: state.getReportResult,
  getReportError: state.getReportError
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
