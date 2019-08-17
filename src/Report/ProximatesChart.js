import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { getNutrientValue } from '../usda';
import { flatten } from 'lodash';

export default class ProximatesChart extends PureComponent {
  getValue

  render() {
    let totalFat = getNutrientValue(this.props.report, 'Total lipid (fat)');
    let totalCarbs = getNutrientValue(this.props.report, 'Carbohydrate, by difference');
    let protein = getNutrientValue(this.props.report, 'Protein');
    let water = getNutrientValue(this.props.report, 'Water');
    let other = 100 - (totalFat + totalCarbs + protein + water);
    
    const data01 = [
      { name: 'Total Fat', value: totalFat },
      { name: 'Total Carbs', value: totalCarbs },
      { name: 'Protein', value: protein },
      { name: 'Water', value: water },
      { name: 'Other', value: other },
    ];
    
    let saturatedFats = getNutrientValue(this.props.report, 'Fatty acids, total saturated');
    let polySaturatedFats = getNutrientValue(this.props.report, 'Fatty acids, total polyunsaturated');
    let monoSaturatedFats = getNutrientValue(this.props.report, 'Fatty acids, total monounsaturated');
    let otherFats = totalFat - saturatedFats - polySaturatedFats - monoSaturatedFats;
    
    let dietaryFiber = getNutrientValue(this.props.report, 'Fiber, total dietary')
    let sugar = getNutrientValue(this.props.report, 'Sugars, total')
    let otherCarbs = totalCarbs - dietaryFiber - sugar;
    
    const data02 = [
      { name: 'Polyunsat. Fat', value: polySaturatedFats },
      { name: 'Monounsat. Fat', value: monoSaturatedFats },
      { name: 'Saturated Fat', value: saturatedFats },
      { name: 'Other Fats', value: otherFats },
      { name: 'Dietary Fiber', value: dietaryFiber },
      { name: 'Sugar', value: sugar },
      { name: 'Other Carbs', value: otherCarbs },
      { name: 'Protein', value: protein },
      { name: 'Water', value: water },
      { name: 'Other', value: other },
    ];

    let sliceWideEnough = (props) => {
      return props.percent > 0.03;
    }

    let label = (props) => {
      let { cx, cy, midAngle, innerRadius, outerRadius, value, index, fill } = props;

      if (!sliceWideEnough(props)) return null;

      const RADIAN = Math.PI / 180;
      const radius = 25 + innerRadius + (outerRadius - innerRadius);
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 1 }).format(value);

      return <text x={x} y={y} fill={fill} textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">{data02[index].name} {value} g</text>;
    }

    let colors = [
      ['#ffeb3b', '#fdd835', '#fbc02d', '#f9a825'],
      ['#aed581', '#8bc34a', '#689f38'],
      ['#f06292'],
      ['#2196f3'],
      ['#e0e0e0'],
    ]

    return (
      <PieChart width={500} height={300}>
        <Pie data={data01} dataKey="value" cx={250} cy={150} innerRadius={30} outerRadius={60} fill="#8884d8">{
          data01.map((entry, index) => <Cell key={index} fill={colors[index][0]} />)
        }</Pie>
        <Pie data={data02} dataKey="value" cx={250} cy={150} innerRadius={70} outerRadius={90} fill="red" labelLine={false} label={label}>
          {data02.map((entry, index) => <Cell key={`index`} fill={flatten(colors)[index]} />)}
          <Label value={`${this.props.mass} g`} position="center"/>
        </Pie>
      </PieChart>
    );
  }
}