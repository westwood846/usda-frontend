import React, { Component } from "react";
import { connect } from "react-redux";
import ProximatesChart from "./ProximatesChart";
import Comparator from "./Comparator";

class Analysis extends Component {
  render() {
    let calories =
      (this.props.report.nutrients.find(
        (nutrient) => nutrient.name === "Energy"
      ).value *
        this.props.mass) /
      100;

    return (
      <div className="Analysis">
        <ProximatesChart report={this.props.report} mass={this.props.mass} />
        <Comparator calories={calories} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mass: state.app.mass,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
