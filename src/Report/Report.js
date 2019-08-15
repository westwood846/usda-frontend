import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortNutrientsByGroup } from '../usda';
import { NutrientTable } from './NutrientsTable';

class Report extends Component {
  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);

    return (
      <div className="Report">
        <NutrientTable nutrients={nutrients}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
