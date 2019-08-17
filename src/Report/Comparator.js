import React, { Component } from 'react';
import { times } from 'lodash';

const BANANA_FACTOR = 105;
const BREAD_FACTOR = 67;
const BUBBLE_TEA_FACTOR = 350;

class Comparator extends Component {
  render() {
    let bananas = Math.round(this.props.calories / BANANA_FACTOR);
    let bread = Math.round(this.props.calories / BREAD_FACTOR);
    let bubbleTeas = Math.round(this.props.calories / BUBBLE_TEA_FACTOR);
    
    return (
      <div className="Comparator">
        <div className="Comparator-header">
          <h2>{this.props.calories} kcal</h2><br/>equal
        </div>
        <div className="emoji-comparator">
          {times(bananas, n => '🍌')}<br/>{bananas} Medium Bananas (118g)
        </div>
        <div className="emoji-comparator">
          {times(bread, n => '🍞')}<br/>{bread} Slices of White Bread (28g)
        </div>
        <div className="emoji-comparator">
          {times(bubbleTeas, n => '🍹')}<br/>{bubbleTeas} Cups of Bubble Tea 
        </div>
      </div>
    )
  }
}

export default Comparator;
