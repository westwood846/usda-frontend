import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortNutrientsByGroup } from '../usda';

class Report extends Component {
  render() {
    let nutrients = sortNutrientsByGroup(this.props.report.nutrients);

    return (
      <div className="Report">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Group</td>
              <td>Per 100 g</td>
            </tr>
          </thead>
          <tbody>
            {nutrients.map((nutrient, index) => (
              <tr key={index}>
                <td>{nutrient.nutrient_id}</td>
                <td>{nutrient.name}</td>
                <td>{nutrient.group}</td>
                <td>{`${nutrient.value} ${nutrient.unit}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
