import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { css } from "emotion";
import { withRouter, Link } from "react-router-dom";

import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";

import {
  reduce,
  get,
  difference,
  pick,
  chain,
  partial,
  sortBy,
  indexOf,
  default as _,
} from "lodash";

import DataTable from "react-data-table-component";

import { getReport, compareSet } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import {
  pivotNutrients,
  groupOrderNumber,
  getDatum,
  getReference,
} from "../usda";
import ErrorBoundary from "../ErrorBoundary";
import Logo from "../Logo";
import NutrientSelector from "./NutrientSelector";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const colors = [
  red[300],
  pink[300],
  purple[300],
  deepPurple[300],
  indigo[300],
  blue[300],
  lightBlue[300],
  cyan[300],
  teal[300],
];

const staticColumns = [
  {
    name: "Name",
    sortable: true,
    compact: true,
    selector: (row) => get(row, "desc.name"),
    cell: (row) => (
      <Link to={`/report/${row.desc.ndbno}`}>{row.desc.name}</Link>
    ),
  },
  // {
  //   name: "ndbno",
  //   selector: "desc.ndbno",
  //   sortable: true,
  //   compact: true,
  // },
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

  const dynamicColumns = chain(selectedNutrients)
    .filter("selected")
    .map((nutrient) => ({
      name: nutrient.name,
      selector: (row) =>
        Number(get(row, ["nutrients", nutrient.name, "value"])),
      format: (row) => getDatum(row, nutrient.name, 1, 2),
      sortable: true,
      compact: true,
    }))
    .value();

  const columns = [...staticColumns, ...dynamicColumns];

  const [sort, setSort] = useState();

  let sortedReports = sort ? sortBy(reports, sort.selector) : reports;
  if (sort && sort.direction !== "asc") {
    sortedReports = sortedReports.reverse();
  }
  const reportIndices = reports.reduce(
    (acc, report) => ({
      ...acc,
      [report.desc.ndbno]: indexOf(sortedReports, report),
    }),
    {}
  );

  const chartData = chain(dynamicColumns)
    .map((column) => ({
      name: column.name,
      ...reduce(
        reports,
        (acc, report) => ({
          ...acc,
          [reportIndices[report.desc.ndbno]]: getReference(
            column.name,
            report,
            1,
            2
          ),
        }),
        {}
      ),
    }))
    .value();

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
          onSort={(sort, direction) => setSort({ ...sort, direction })}
        />
      </ErrorBoundary>
      <ResponsiveContainer
        width="100%"
        height={300}
        className={css`
          margin-top: 2rem;
        `}
      >
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {sortedReports.map((report, index) => (
            <Bar
              key={index}
              dataKey={index}
              name={sortedReports[index].desc.name}
              fill={colors[reports.indexOf(report) % colors.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
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
