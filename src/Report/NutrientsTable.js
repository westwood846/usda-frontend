import React, { Component } from "react";
import { connect } from "react-redux";

export class NutrientTable extends Component {
  render() {
    return (
      <div className="NutrientTable">
        <h2>{this.props.name}</h2>
        <table>
          <thead>
            <tr>
              {/* <td>id</td> */}
              <td>Name</td>
              {/* <td>Group</td> */}
              <td className="val">Per 100 g</td>
            </tr>
          </thead>
          <tbody>
            {this.props.nutrients.map((nutrient, index) => (
              <tr key={index}>
                {/* <td>{nutrient.nutrient_id}</td> */}
                <td>{nutrient.name}</td>
                {/* <td>{nutrient.group}</td> */}
                <td className="val">{`${nutrient.value} ${nutrient.unit}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NutrientTable);
