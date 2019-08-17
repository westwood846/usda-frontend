import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProximatesChart from './ProximatesChart';
import { times } from 'lodash';
const BANANA_FACTOR = 105;
const BREAD_FACTOR = 67;

class Analysis extends Component {
  render() {
    let calories = this.props.report.nutrients.find(nutrient => nutrient.name === "Energy");
    let bananas = Math.round(Number(calories.value) / BANANA_FACTOR);
    let bread = Math.round(Number(calories.value) / BREAD_FACTOR);

    return (
      <div className="Analysis">
        <ProximatesChart/>
        <pre><code>{JSON.stringify(this.props.report, null, 2)}</code></pre>
        <div>
          {calories.value} {calories.unit} equal...
        </div>
        <div className="emoji-comparator">
          {times(bananas, n => '🍌')} {bananas} medium bananas (118g)
        </div>
        <div className="emoji-comparator">
          {times(bread, n => '🍞')} {bread} slices of white bread (28g)
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
