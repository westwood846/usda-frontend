import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortNutrientsByGroup, groupByNutrientGroup, getNutrient, referenceIntake } from '../usda';
import { NutrientTable } from './NutrientsTable';

class Report extends Component {
  datum = (key, precision=0) => {
    let nutrient = getNutrient(this.props.report, key);
    return `${Number(nutrient.value).toFixed(precision)} ${nutrient.unit}`;
  }

  reference = (key) => {
    return `${Math.round(getNutrient(this.props.report, key).value / referenceIntake[key] * 100)} %`;
  }

  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);
    let nutrientGroups = groupByNutrientGroup(nutrients);

    return (
      <div className="Report">
        <h2>Proximates</h2>
        <table className="nutTable">
          <tbody>
            <tr>
              <td className="nutTable-left"><strong>Calories </strong>{this.datum('Energy')}</td>
              <td className="nutTable-right">{this.reference('Energy')}</td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Total Fat </strong>{this.datum('Total lipid (fat)')}</td>
              <td className="nutTable-right">{this.reference('Total lipid (fat)')}</td>
            </tr>
            <tr>
              <td className="nutTable-left" className="indent-2">Saturated fat {this.datum('Fatty acids, total saturated')}</td>
              <td className="nutTable-right">{this.reference('Fatty acids, total saturated')}</td>
            </tr>
            <tr>
              <td className="nutTable-left" className="indent-2">Polyunsaturated fat {this.datum('Fatty acids, total polyunsaturated')}</td>
              <td className="nutTable-right"></td>
            </tr>
            <tr>
              <td className="nutTable-left" className="indent-2">Monounsaturated fat {this.datum('Fatty acids, total monounsaturated')}</td>
              <td className="nutTable-right"></td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Cholesterol </strong>{this.datum('Cholesterol')}</td>
              <td className="nutTable-right">{this.reference('Cholesterol')}</td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Sodium </strong>{this.datum('Sodium, Na')}</td>
              <td className="nutTable-right">{this.reference('Sodium, Na')}</td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Potassium </strong>{this.datum('Potassium, K')}</td>
              <td className="nutTable-right">{this.reference('Potassium, K')}</td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Total Carbohydrate </strong>{this.datum('Carbohydrate, by difference')}</td>
              <td className="nutTable-right">{this.reference('Carbohydrate, by difference')}</td>
            </tr>
            <tr>
              <td className="nutTable-left indent-2">Dietary fiber {this.datum('Fiber, total dietary', 1)}</td>
              <td className="nutTable-right">{this.reference('Fiber, total dietary')}</td>
            </tr>
            <tr>
              <td className="nutTable-left indent-2">Sugar {this.datum('Sugars, total', 1)}</td>
              <td className="nutTable-right"></td>
            </tr>
            <tr>
              <td className="nutTable-left"><strong>Protein </strong>{this.datum('Protein')}</td>
              <td className="nutTable-right">{this.reference('Protein')}</td>
            </tr>
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
