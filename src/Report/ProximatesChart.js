import React from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import { getNutrientValue } from "../usda";
import { flatten } from "lodash";

import yellow from "@material-ui/core/colors/yellow";
import lightGreen from "@material-ui/core/colors/lightGreen";
import pink from "@material-ui/core/colors/pink";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

export const ProximatesChart = ({ report, mass }) => {
  const getValue = (key) => (getNutrientValue(report, key) * mass) / 100;

  let totalFat = getValue("Total lipid (fat)");
  let totalCarbs = getValue("Carbohydrate, by difference");
  let protein = getValue("Protein");
  let water = getValue("Water");
  let other = mass - (totalFat + totalCarbs + protein + water);

  const data01 = [
    { name: "Total Fat", value: totalFat },
    { name: "Total Carbs", value: totalCarbs },
    { name: "Protein", value: protein },
    { name: "Water", value: water },
    { name: "Other", value: other },
  ];

  let saturatedFats = getValue("Fatty acids, total saturated");
  let polySaturatedFats = getValue("Fatty acids, total polyunsaturated");
  let monoSaturatedFats = getValue("Fatty acids, total monounsaturated");
  let otherFats =
    totalFat - saturatedFats - polySaturatedFats - monoSaturatedFats;

  let dietaryFiber = getValue("Fiber, total dietary");
  let sugar = getValue("Sugars, total");
  let otherCarbs = totalCarbs - dietaryFiber - sugar;

  const data02 = [
    { name: "Polyunsat. Fat", value: polySaturatedFats },
    { name: "Monounsat. Fat", value: monoSaturatedFats },
    { name: "Saturated Fat", value: saturatedFats },
    { name: "Other Fats", value: otherFats },
    { name: "Dietary Fiber", value: dietaryFiber },
    { name: "Sugar", value: sugar },
    { name: "Other Carbs", value: otherCarbs },
    { name: "Protein", value: protein },
    { name: "Water", value: water },
    { name: "Other", value: other },
  ];

  let sliceWideEnough = (props) => {
    return props.percent > 0.03;
  };

  let label = (props) => {
    let {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      value,
      index,
      fill,
    } = props;

    if (!sliceWideEnough(props)) return null;

    const RADIAN = Math.PI / 180;
    const radius = 10 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    value = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 1,
    }).format(value);

    return (
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data02[index].name} {value} g
      </text>
    );
  };

  let colors = [
    [yellow[500], yellow[700], yellow[800], yellow[300]], // fats
    [lightGreen[500], lightGreen[700], lightGreen[300]], // carbs
    [pink[700]], // protein
    [lightBlue[500]], // water
    [grey[300]], // other
  ];

  let legend = data01.map((entry, index) => ({
    value: entry.name,
    color: colors[index][0],
  }));

  return (
    <PieChart width={500} height={275}>
      <Pie
        data={data01}
        dataKey="value"
        cx={250}
        cy={125}
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
        isAnimationActive={false}
      >
        {data01.map((entry, index) => (
          <Cell key={index} fill={colors[index][0]} />
        ))}
      </Pie>
      <Pie
        data={data02}
        dataKey="value"
        cx={250}
        cy={125}
        innerRadius={70}
        outerRadius={90}
        fill="red"
        labelLine={false}
        label={label}
        isAnimationActive={false}
      >
        {data02.map((entry, index) => (
          <Cell key={`index`} fill={flatten(colors)[index]} />
        ))}
        <Label value={`${mass} g`} position="center" />
      </Pie>
      <Legend payload={legend} />
    </PieChart>
  );
};

export default ProximatesChart;
