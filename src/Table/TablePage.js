import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";

import { get, difference, pick, chain } from "lodash";

import DataTable from "react-data-table-component";

import { getReport } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import { pivotNutrients, groupOrderNumber } from "../usda";

const staticColumns = [
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
];

export const TablePage = ({ ids, cachedIds, reports, getReport }) => {
  useDeepCompareEffect(() => {
    const idsToGet = difference(ids, cachedIds);
    idsToGet.forEach(getReport);
  }, [ids, cachedIds, getReport]);
  const columns = useMemo(() => {
    const dynamicColumns = chain(reports)
      .map("nutrients")
      .flatMap(Object.values)
      .sortBy(groupOrderNumber)
      .map("name")
      .uniq()
      .map((name) => ({
        name,
        selector: `nutrients.${name}.value`,
        sortable: true,
      }))
      .value();
    return [...staticColumns, ...dynamicColumns];
  }, [reports]);
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
