import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";

import { get, difference, pick } from "lodash";

import DataTable from "react-data-table-component";

import { getReport } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import { pivotNutrients } from "../usda";

const columns = [
  {
    name: "Name",
    selector: "desc.name",
    sortable: true,
  },
  {
    name: "ndbno",
    selector: "desc.ndbno",
    sortable: true,
  },
  {
    name: "Water",
    selector: "nutrients.Water.value",
    sortable: true,
  },
  {
    name: "Energy",
    selector: "nutrients.Energy.value",
    sortable: true,
  },
  {
    name: "Protein",
    selector: "nutrients.Protein.value",
    sortable: true,
  },
];

export const TablePage = ({ ids, cachedIds, reports, getReport }) => {
  useDeepCompareEffect(() => {
    const idsToGet = difference(ids, cachedIds);
    idsToGet.forEach(getReport);
  }, [ids, cachedIds, getReport]);
  return (
    <div>
      <DataTable columns={columns} data={reports} title="Reports" responsive />
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
    reports: Object.values(pick(cachedReports(state), ids)).map(pivotNutrients),
  };
};

const mapDispatchToProps = {
  getReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
