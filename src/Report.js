import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from './Breadcrumbs';
import { getReport } from './actions';

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
            {this.props.getReportResult && this.props.getReportResult.nutrients.map((nutrient, index) => (
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
  gettingReport: state.app.gettingReport,
  getReportNDBNO: state.app.getReportNDBNO,
  getReportResult: state.app.getReportResult,
  getReportError: state.app.getReportError
})

const mapDispatchToProps = {
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)
