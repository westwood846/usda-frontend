import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";

import { get, difference, pick } from "lodash";

import { getReport } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";

export const TablePage = ({ ids, cachedIds, reports, getReport }) => {
  useDeepCompareEffect(() => {
    const idsToGet = difference(ids, cachedIds);
    idsToGet.forEach(getReport);
  }, [ids, cachedIds, getReport]);
  return (
    <div>
      {JSON.stringify(ids)}
      <br />
      {JSON.stringify(reports)}
    </div>
  );
};

TablePage.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string),
  cachedIds: PropTypes.arrayOf(PropTypes.string),
  reports: PropTypes.arrayOf(PropTypes.object),
  getReport: PropTypes.func,
};

const mapStateToProps = (state) => {
  const ids = get(state, "router.location.query.ids", "").split(",");
  return {
    cachedIds: cachedReportsIds(state),
    ids,
    reports: Object.values(pick(cachedReports(state), ids)),
  };
};

const mapDispatchToProps = {
  getReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
