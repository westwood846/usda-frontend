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
        <div>
          {this.props.calories} kcal equal...
        </div>
        <div className="emoji-comparator">
          {times(bananas, n => '🍌')} {bananas}&nbsp;Medium&nbsp;Bananas&nbsp;(118g)
        </div>
        <div className="emoji-comparator">
          {times(bread, n => '🍞')} {bread}&nbsp;Slices&nbsp;of&nbsp;White&nbsp;Bread&nbsp;(28g)
        </div>
        <div className="emoji-comparator">
          {times(bubbleTeas, n => '🍹')} {bubbleTeas}&nbsp;Cups&nbsp;of&nbsp;Bubble&nbsp;Tea&nbsp;
        </div>
      </div>
    )
  }
}

export default Comparator;
