import React, { Component } from 'react'
import { connect } from 'react-redux'
import Report from './Report';
import { getReport } from '../actions';
import Breadcrumbs from './Breadcrumbs';
import { get, isUndefined } from 'lodash';
import { Link } from "react-router-dom";
import Analysis from './Analysis';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.urlNDBNO = this.props.match.params.ndbno;
    this.props.getReport(this.urlNDBNO);
  }


  render() {
    return (
      <div className="ReportPage">
        <Link to="/search/">&#8592; New Search</Link>
        <h1>
          {this.props.loaded ? `${this.props.name}` : `Loading report for ndbno ${this.urlNDBNO}`}<br/>
          {this.props.loaded && <small>{[this.props.ds, this.props.manu, this.props.ndbno].filter(e=>e).join(" · ")}</small>}
        </h1>
        {this.props.loaded && <Breadcrumbs name={this.props.name}/>}
        {this.props.loaded && <div className="ReportPage-container">
          <div className="ReportPage-report">
            <Report report={this.props.report}/>
          </div>
          <div className="ReportPage-analysis">
            <Analysis report={this.props.report}/>
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loaded: !isUndefined(state.app.getReportResult),
  report: state.app.getReportResult,
  name: get(state.app.getReportResult, 'desc.name'),
  ds: get(state.app.getReportResult, 'desc.ds'),
  manu: get(state.app.getReportResult, 'desc.manu'),
  ndbno: get(state.app.getReportResult, 'desc.ndbno'),
})

const mapDispatchToProps = {
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)
