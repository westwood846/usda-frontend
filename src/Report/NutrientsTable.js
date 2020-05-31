import React from "react";

export const NutrientTable = ({ name, nutrients }) => {
  return (
    <div className="NutrientTable">
      <h2>{name}</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td className="val">Per 100 g</td>
          </tr>
        </thead>
        <tbody>
          {nutrients.map((nutrient, index) => (
            <tr key={index}>
              <td>{nutrient.name}</td>
              <td className="val">{`${nutrient.value} ${nutrient.unit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NutrientTable;
