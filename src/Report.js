import React, { Component } from 'react'
import { connect } from 'react-redux'

class Report extends Component {
  render() {
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
            {this.props.report.nutrients.map((nutrient, index) => (
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
