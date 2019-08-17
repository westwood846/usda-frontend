import { groupBy, find } from 'lodash';


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

export const decodeDataSourceIdentifier = (identifier) => (dataSourceIdentifierLookup[identifier]);

export const getNutrient = (food, name) => find(food.nutrients, {name});

export const referenceIntake = {
  "Energy": 2000,
  "Total lipid (fat)": 67,
  "Fatty acids, total saturated": 20,
  "Cholesterol": 300,
  "Sodium, Na": 2400,
  "Potassium, K": 3533,
  "Carbohydrate, by difference": 300,
  "Fiber, total dietary": 25,
  "Protein": 50
}