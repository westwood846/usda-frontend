import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortNutrientsByGroup, groupByNutrientGroup, getNutrient, referenceIntake } from '../usda';
import { NutrientTable } from './NutrientsTable';

class Report extends Component {
  datum = (key, precision=0) => {
    let nutrient = getNutrient(this.props.report, key);
    if (!nutrient) return null;
    return `${Number(nutrient.value).toFixed(precision)} ${nutrient.unit}`;
  }

  reference = (key) => {
    return referenceIntake[key] ? `${Math.round(getNutrient(this.props.report, key).value / referenceIntake[key] * 100)} %` : null;
  }

  tableRow = (index, key, label, main=false) => {
    if (getNutrient(this.props.report, key)) {
      return (
        <tr key={index}>
          <td className={`nutTable-left ${!main && 'indent-2'}`}>{main ? (<strong>{label} </strong>) : label+" "}{this.datum(key)}</td>
          <td className="nutTable-right">{this.reference(key)}</td>
        </tr>
      )
    } else {
      return null;
    }
  }

  tableRows = [
    {label: "Energy",              key: "Calories",                           main: true},
    {label: "Total Fat",           key: "Total lipid (fat)",                  main: true},
    {label: "Saturated fat",       key: "Fatty acids, total saturated",       main: false},
    {label: "Polyunsaturated fat", key: "Fatty acids, total polyunsaturated", main: false},
    {label: "Monounsaturated fat", key: "Fatty acids, total monounsaturated", main: false},
    {label: "Water",               key: "Water",                              main: true},
    {label: "Cholesterol",         key: "Cholesterol",                        main: true},
    {label: "Sodium",              key: "Sodium, Na",                         main: true},
    {label: "Potassium",           key: "Potassium, K",                       main: true},
    {label: "Total Carbohydrate",  key: "Carbohydrate, by difference",        main: true},
    {label: "Dietary fiber",       key: "Fiber, total dietary",               main: false},
    {label: "Sugar",               key: "Sugars, total",                      main: false},
    {label: "Protein",             key: "Protein",                            main: true},
  ]

  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);
    let nutrientGroups = groupByNutrientGroup(nutrients);

    return (
      <div className="Report">
        <table className="nutTable">
          <tbody>
            {this.tableRows.map((row, index) => this.tableRow(index, row.key, row.label, row.main))}
          </tbody>
        </table>
        {Object.keys(nutrientGroups).map((groupKey, index) => <NutrientTable nutrients={nutrientGroups[groupKey]} name={groupKey} key={index}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
