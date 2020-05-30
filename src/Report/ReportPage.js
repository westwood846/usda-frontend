import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InputRange from "@material-ui/core/Slider";
import "react-input-range/lib/css/index.css";
import { get, isUndefined } from "lodash";

import Breadcrumbs from "./Breadcrumbs";
import Analysis from "./Analysis";
import Report from "./Report";
import Loading from "./Loading";

import { getReport, setMass, compareInsert } from "../actions";

export const ReportPage = ({
  match,
  report,
  getReport,
  compareInsert,
  setMass,
  mass,
  loaded,
}) => {
  const { name, ds, manu, ndbno } = get(report, "desc", {});
  const urlNDBNO = match.params.ndbno;

  useEffect(() => {
    console.log("ee");
    getReport(urlNDBNO);
  }, [urlNDBNO, getReport]);

  const sliderPrecision = (() => {
    if (mass < 25) return 1;
    if (mass < 100) return 5;
    if (mass < 500) return 10;
    return 50;
  })();

  return (
    <div className="ReportPage">
      <div className="header">
        <div>
          <h1>
            {loaded ? `${name}` : `Loading report for ndbno ${urlNDBNO}`}
            <button onClick={() => compareInsert(ndbno, mass)}>Compare</button>
          </h1>
          <div className="descriptor">
            {loaded && (
              <small>{[ds, manu, ndbno].filter((e) => e).join(" · ")}</small>
            )}
          </div>
          {loaded && <Breadcrumbs name={name} />}
          <Link to="/search/" className="newSearchLink">
            &#8592; New Search
          </Link>
          <InputRange
            min={0}
            max={1000}
            step={sliderPrecision}
            value={mass}
            onChange={(_event, value) => setMass(value)}
            valueLabelFormat={(value) => `Mass ${value} g`}
          />
        </div>
      </div>
      {loaded ? (
        <div className="ReportPage-container">
          <div className="ReportPage-report">
            <Report report={report} />
          </div>
          <div className="ReportPage-analysis">
            <Analysis report={report} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loaded: !isUndefined(state.app.getReportResult),
  report: state.app.getReportResult,
  mass: state.app.mass,
});

const mapDispatchToProps = {
  getReport,
  setMass,
  compareInsert,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
