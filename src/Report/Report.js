import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortNutrientsByGroup, groupByNutrientGroup } from '../usda';
import { NutrientTable } from './NutrientsTable';

class Report extends Component {
  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);
    let nutrientGroups = groupByNutrientGroup(nutrients);

    return (
      <div className="Report">
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
