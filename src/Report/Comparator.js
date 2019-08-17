import React, { Component } from 'react';
import { times } from 'lodash';

const BANANA_FACTOR = 105;
const BREAD_FACTOR = 67;

class Comparator extends Component {
  render() {
    let bananas = Math.round(this.props.calories / BANANA_FACTOR);
    let bread = Math.round(this.props.calories / BREAD_FACTOR);
    
    return (
      <div className="Comparator">
        <div>
          {this.props.calories} kcal equal...
        </div>
        <div className="emoji-comparator">
          {times(bananas, n => '🍌')} {bananas}&nbsp;medium&nbsp;bananas&nbsp;(118g)
        </div>
        <div className="emoji-comparator">
          {times(bread, n => '🍞')} {bread}&nbsp;slices&nbsp;of&nbsp;white&nbsp;bread&nbsp;(28g)
        </div>
      </div>
    )
  }
}

export default Comparator;
