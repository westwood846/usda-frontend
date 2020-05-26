import React, { Component } from "react";
import { connect } from "react-redux";
import {
  sortNutrientsByGroup,
  groupByNutrientGroup,
  getNutrient,
  labels,
  getDatum,
  getReference,
} from "../usda";
import { chunk } from "lodash";

class Report extends Component {
  datum = (key, precision) =>
    getDatum(this.props.report, key, this.props.factor, precision);

  reference = (key) =>
    `${getReference(key, this.props.report, this.props.factor)}%`;

  datumCell = (key, label = key, main) => (
    <td className={`nutTable-left ${!main && "indent-2"}`}>
      {main ? <strong>{label} </strong> : label + " "}
      {this.datum(key)}
    </td>
  );
  referenceCell = (key) => (
    <td className="nutTable-right">{this.reference(key)}</td>
  );

  tableRow = (index, key, label = key, main = false) => {
    if (getNutrient(this.props.report, key)) {
      return (
        <tr key={index}>
          {this.datumCell(key, label, main)}
          {this.referenceCell(key)}
        </tr>
      );
    } else {
      return null;
    }
  };

  doubleTable = (nutrients) => {
    let datumCells = nutrients.map((nutrient) =>
      this.datumCell(nutrient.name, labels[nutrient.name], true)
    );
    let referenceCells = nutrients.map((nutrient) =>
      this.referenceCell(nutrient.name)
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

  tableRows = [
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

  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);
    let nutrientGroups = groupByNutrientGroup(nutrients);

    return (
      <div className="Report">
        <table className="nutTable">
          <tbody>
            {this.tableRows.map((row, index) =>
              this.tableRow(index, row.key, row.label, row.main)
            )}
          </tbody>
        </table>
        {nutrientGroups["Vitamins"] &&
          this.doubleTable(nutrientGroups["Vitamins"])}
        {nutrientGroups["Minerals"] &&
          this.doubleTable(nutrientGroups["Minerals"])}
        {nutrientGroups["Other"] && this.doubleTable(nutrientGroups["Other"])}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mass: state.app.mass,
  factor: state.app.mass / 100,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
