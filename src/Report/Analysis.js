import React from "react";
import { connect } from "react-redux";
import ProximatesChart from "./ProximatesChart";
import Comparator from "./Comparator";

export const Analysis = ({ report, mass }) => {
  const calories =
    (report.nutrients.find((nutrient) => nutrient.name === "Energy").value *
      mass) /
    100;

  return (
    <div className="Analysis">
      <ProximatesChart report={report} mass={mass} />
      <Comparator calories={calories} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mass: state.app.mass,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
