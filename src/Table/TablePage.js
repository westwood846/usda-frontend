import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { css } from "emotion";
import { withRouter } from "react-router-dom";

import { get, difference, pick, chain, partial, default as _ } from "lodash";

import DataTable from "react-data-table-component";

import { getReport, compareSet } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import { pivotNutrients, groupOrderNumber } from "../usda";
import ErrorBoundary from "../ErrorBoundary";
import Logo from "../Logo";
import NutrientSelector from "./NutrientSelector";

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
  useDeepCompareEffect(() => {
    const idsToGet = difference(ids, cachedIds);
    idsToGet.forEach(getReport);
  }, [ids, cachedIds, getReport]);
  useDeepCompareEffect(() => {
    compareSet(ids.map((id) => ({ ndbno: id, amount: 100 })));
  }, [ids, compareSet]);

  const nutrients = useMemo(() => {
    return chain(reports)
      .map("nutrients")
      .flatMap(Object.values)
      .sortBy(groupOrderNumber)
      .map(partial(pick, _, ["name", "group"]))
      .uniq()
      .value();
  }, [reports]);

  const [selectedNutrients, setSelectedNutrients] = useState(null);

  const columns = [
    ...staticColumns,
    ...chain(selectedNutrients)
      .filter("selected")
      .map((nutrient) => ({
        name: nutrient.name,
        selector: (row) => get(row, ["nutrients", nutrient.name, "value"], "-"),
        sortable: true,
        compact: true,
      }))
      .value(),
  ];

  return (
    <div
      className={css`
        padding: 2rem 1rem;
      `}
    >
      <Logo />
      <NutrientSelector
        nutrients={nutrients}
        setNutrients={setSelectedNutrients}
        className={css`
          margin-top: 2rem;
        `}
      />
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
