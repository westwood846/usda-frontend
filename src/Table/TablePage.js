import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { css } from "emotion";
import { withRouter } from "react-router-dom";

import {
  reduce,
  get,
  difference,
  pick,
  chain,
  partial,
  default as _,
} from "lodash";

import DataTable from "react-data-table-component";

import { getReport, compareSet } from "../actions";
import { cachedReportsIds, cachedReports } from "../selectors";
import { pivotNutrients, groupOrderNumber } from "../usda";
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
  "#f44336",
  "#e91e63",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
];

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

  const dynamicColumns = chain(selectedNutrients)
    .filter("selected")
    .map((nutrient) => ({
      name: nutrient.name,
      selector: (row) => get(row, ["nutrients", nutrient.name, "value"], "-"),
      sortable: true,
      compact: true,
    }))
    .value();

  const columns = [...staticColumns, ...dynamicColumns];

  const chartData = chain(dynamicColumns)
    .filter("selector")
    .map((column) => ({
      name: column.name,
      ...reduce(
        reports,
        (acc, report) => ({
          ...acc,
          [report.desc.ndbno]: Number(column.selector(report)),
        }),
        {}
      ),
    }))
    .value();

  console.log(chartData);

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
          {reports.map((report, index) => (
            <Bar
              key={report.desc.ndbno}
              dataKey={report.desc.ndbno}
              name={report.desc.name}
              fill={colors[index % colors.length]}
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
