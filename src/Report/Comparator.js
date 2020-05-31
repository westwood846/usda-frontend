import React from "react";

import { times, constant } from "lodash";

const BANANA_FACTOR = 105;
const APPLE_FACTOR = 95;
const BREAD_FACTOR = 67;
const BUBBLE_TEA_FACTOR = 350;

export const Comparator = ({ calories }) => {
  const bananas = Math.round(calories / BANANA_FACTOR);
  const apples = Math.round(calories / APPLE_FACTOR);
  const bread = Math.round(calories / BREAD_FACTOR);
  const bubbleTeas = Math.round(calories / BUBBLE_TEA_FACTOR);

  return (
    <div className="Comparator">
      <div className="Comparator-header">
        <h2>{calories} kcal</h2>
        <br />
        equal
      </div>
      <div className="emoji-comparator">
        {times(bubbleTeas, constant("🍹"))}
        <br />
        {bubbleTeas} Cups of Bubble Tea
      </div>
      <div className="emoji-comparator">
        {times(bananas, constant("🍌"))}
        <br />
        {bananas} Medium Bananas (118g)
      </div>
      <div className="emoji-comparator">
        {times(apples, constant("🍎"))}
        <br />
        {apples} Apples (182g)
      </div>
      <div className="emoji-comparator">
        {times(bread, constant("🍞"))}
        <br />
        {bread} Slices of White Bread (28g)
      </div>
    </div>
  );
};

export default Comparator;
