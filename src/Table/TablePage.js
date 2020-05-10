import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { css } from "emotion";
import { withRouter } from "react-router-dom";

import { get, difference, pick, chain } from "lodash";

import DataTable from "react-data-table-component";

import { getReport, compareSet } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import { pivotNutrients, groupOrderNumber } from "../usda";
import ErrorBoundary from "../ErrorBoundary";
import Logo from "../Logo";

const staticColumns = [
  {
    name: "Name",
    selector: "desc.name",
    sortable: true,
    compact: true,
  },
  {
    name: "ndbno",
    selector: "desc.ndbno",
    sortable: true,
    compact: true,
  },
];

export const TablePage = ({
  ids,
  cachedIds,
  reports,
  getReport,
  compareSet,
}) => {
  console.log({ ids });
  useDeepCompareEffect(() => {
    const idsToGet = difference(ids, cachedIds);
    idsToGet.forEach(getReport);
  }, [ids, cachedIds, getReport]);
  useDeepCompareEffect(() => {
    compareSet(ids.map((id) => ({ ndbno: id, amount: 100 })));
  }, [ids, compareSet]);
  const columns = useMemo(() => {
    const dynamicColumns = chain(reports)
      .map("nutrients")
      .flatMap(Object.values)
      .sortBy(groupOrderNumber)
      .map("name")
      .uniq()
      .map((name) => ({
        name,
        selector: (row) => get(row, `nutrients.${name}.value`, "-"),
        sortable: true,
        compact: true,
      }))
      .value();
    return [...staticColumns, ...dynamicColumns];
  }, [reports]);
  return (
    <div
      className={css`
        padding: 2rem 1rem;
      `}
    >
      <Logo />
      <ErrorBoundary>
        <DataTable
          columns={columns}
          data={reports}
          title="Reports"
          responsive
          dense
        />
      </ErrorBoundary>
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
  console.log({ location: state.router.location });
  const idsRaw = new URLSearchParams(
    get(state, "router.location.search", "")
  ).get("ids");
  const ids = idsRaw ? idsRaw.split(",") : [];
  return {
    cachedIds: cachedReportsIds(state),
    ids,
    reports: Object.values(pick(cachedReports(state), ids)).map(pivotNutrients),
  };
};

const mapDispatchToProps = {
  getReport,
  compareSet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TablePage));
