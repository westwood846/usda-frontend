import { groupBy } from 'lodash';


export const groupOrder = ['Proximates', 'Vitamins', 'Minerals', 'Lipids', 'Other'];

export const sortNutrientsByGroup = (nutrients) => {
  return nutrients.sort(compareNutrients);
}

export const compareNutrients = (a, b) => {
  return groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) ;
}

export const groupByNutrientGroup = (nutrients) => groupBy(nutrients, 'group');