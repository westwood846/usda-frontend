import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Report from './Report';
import { getReport } from './actions';
import Breadcrumbs from './Breadcrumbs';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.props.getReport(this.props.match.params.ndbno);
  }


  render() {
    return this.props.getReportResult ? (
      <div className="ReportPage">
        <h1>
          {this.props.getReportResult ? `${this.props.getReportResult.desc.name}` : `Loading report for ndbno ${this.props.match.params.ndbno}`}<br/>
          <small>{this.props.getReportResult && <div>{[this.props.getReportResult.desc.ds, this.props.getReportResult.desc.manu, this.props.getReportResult.desc.ndbno].filter(e=>e).join(" · ")}</div>}</small>
        </h1>
        <Breadcrumbs/>
        <Report/>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  getReportResult: state.app.getReportResult
})

const mapDispatchToProps = {
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)
