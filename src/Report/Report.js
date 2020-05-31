import React from "react";
import { connect } from "react-redux";

import { chunk } from "lodash";

import {
  sortNutrientsByGroup,
  groupByNutrientGroup,
  getNutrient,
  labels,
  getDatum,
  getReference,
} from "../usda";

export const Report = ({ report, factor }) => {
  const datum = (key, precision) => getDatum(report, key, factor, precision);

  const reference = (key) => `${getReference(key, report, factor)}%`;

  const datumCell = (key, label = key, main) => (
    <td className={`nutTable-left ${!main && "indent-2"}`}>
      {main ? <strong>{label} </strong> : label + " "}
      {datum(key)}
    </td>
  );
  const referenceCell = (key) => (
    <td className="nutTable-right">{reference(key)}</td>
  );

  const tableRow = (index, key, label = key, main = false) => {
    if (getNutrient(report, key)) {
      return (
        <tr key={index}>
          {datumCell(key, label, main)}
          {referenceCell(key)}
        </tr>
      );
    } else {
      return null;
    }
  };

  const doubleTable = (nutrients) => {
    let datumCells = nutrients.map((nutrient) =>
      datumCell(nutrient.name, labels[nutrient.name], true)
    );
    let referenceCells = nutrients.map((nutrient) =>
      referenceCell(nutrient.name)
    );

    let datumCellChucks = chunk(datumCells, 2);
    let referenceCellChucks = chunk(referenceCells, 2);

    return (
      <table className="nutTable">
        <tbody>
          {datumCellChucks.map((datumCellChunk, index) => (
            <tr key={index}>
              {datumCellChucks[index][0]}
              {referenceCellChucks[index][0]}
              {datumCellChucks[index][1] || <td className="nutTable-left"></td>}
              {referenceCellChucks[index][1] || (
                <td className="nutTable-right"></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const tableRows = [
    { label: "Calories", key: "Energy", main: true },
    { label: "Total Fat", key: "Total lipid (fat)", main: true },
    {
      label: "Saturated fat",
      key: "Fatty acids, total saturated",
      main: false,
    },
    {
      label: "Polyunsaturated fat",
      key: "Fatty acids, total polyunsaturated",
      main: false,
    },
    {
      label: "Monounsaturated fat",
      key: "Fatty acids, total monounsaturated",
      main: false,
    },
    { label: "Water", key: "Water", main: true },
    { label: "Cholesterol", key: "Cholesterol", main: true },
    { label: "Sodium", key: "Sodium, Na", main: true },
    { label: "Potassium", key: "Potassium, K", main: true },
    {
      label: "Total Carbohydrate",
      key: "Carbohydrate, by difference",
      main: true,
    },
    { label: "Dietary fiber", key: "Fiber, total dietary", main: false },
    { label: "Sugar", key: "Sugars, total", main: false },
    { label: "Protein", key: "Protein", main: true },
  ];

  const nutrients = sortNutrientsByGroup(report.nutrients);
  const nutrientGroups = groupByNutrientGroup(nutrients);

  return (
    <div className="Report">
      <table className="nutTable">
        <tbody>
          {tableRows.map((row, index) =>
            tableRow(index, row.key, row.label, row.main)
          )}
        </tbody>
      </table>
      {nutrientGroups["Vitamins"] && doubleTable(nutrientGroups["Vitamins"])}
      {nutrientGroups["Minerals"] && doubleTable(nutrientGroups["Minerals"])}
      {nutrientGroups["Other"] && doubleTable(nutrientGroups["Other"])}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mass: state.app.mass,
  factor: state.app.mass / 100,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
