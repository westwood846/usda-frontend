import React, { Component } from "react";
import { connect } from "react-redux";
import Report from "./Report";
import { getReport, setMass } from "../actions";
import Breadcrumbs from "./Breadcrumbs";
import { get, isUndefined } from "lodash";
import { Link } from "react-router-dom";
import Analysis from "./Analysis";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.urlNDBNO = this.props.match.params.ndbno;
    this.props.getReport(this.urlNDBNO);
  }

  sliderPrecision = (mass) => {
    if (mass < 25) return 1;
    if (mass < 100) return 5;
    if (mass < 500) return 10;
    return 50;
  };

  render() {
    return (
      <div className="ReportPage">
        <div className="header">
          <div>
            <h1>
              {this.props.loaded
                ? `${this.props.name}`
                : `Loading report for ndbno ${this.urlNDBNO}`}
              <br />
            </h1>
            <div className="descriptor">
              {this.props.loaded && (
                <small>
                  {[this.props.ds, this.props.manu, this.props.ndbno]
                    .filter((e) => e)
                    .join(" · ")}
                </small>
              )}
            </div>
            {this.props.loaded && <Breadcrumbs name={this.props.name} />}
            <Link to="/search/" className="newSearchLink">
              &#8592; New Search
            </Link>
            <InputRange
              className="massInput"
              minValue={0}
              maxValue={1000}
              step={this.sliderPrecision(this.props.mass)}
              value={this.props.mass}
              onChange={this.props.setMass}
              formatLabel={(value) => `Mass ${value} g`}
            />
          </div>
        </div>
        {this.props.loaded && (
          <div className="ReportPage-container">
            <div className="ReportPage-report">
              <Report report={this.props.report} />
            </div>
            <div className="ReportPage-analysis">
              <Analysis report={this.props.report} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loaded: !isUndefined(state.app.getReportResult),
  report: state.app.getReportResult,
  name: get(state.app.getReportResult, "desc.name"),
  ds: get(state.app.getReportResult, "desc.ds"),
  manu: get(state.app.getReportResult, "desc.manu"),
  ndbno: get(state.app.getReportResult, "desc.ndbno"),
  mass: state.app.mass,
});

const mapDispatchToProps = {
  getReport,
  setMass,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
