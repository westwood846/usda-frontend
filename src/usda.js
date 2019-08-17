import { groupBy } from 'lodash';


export const groupOrder = ['Proximates', 'Vitamins', 'Minerals', 'Lipids', 'Other'];

export const sortNutrientsByGroup = (nutrients) => {
  return nutrients.sort(compareNutrients);
}

export const compareNutrients = (a, b) => {
  return groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) ;
}

export const groupByNutrientGroup = (nutrients) => groupBy(nutrients, 'group');

export const dataSourceIdentifierLookup = {
  BOTH: "Any",
  STANDARD_REFERENCE: "Standard Reference",
  BRANDED_FOOD_PRODUCTS: "Branded Food Products",
}

export const dataSourceIdentifiers = Object.keys(dataSourceIdentifierLookup);

export const decodeDataSourceIdentifier = (identifier) => (dataSourceIdentifierLookup[identifier])