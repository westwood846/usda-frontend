import { groupBy, find } from "lodash";

export const groupOrder = [
  "Proximates",
  "Lipids",
  "Vitamins",
  "Minerals",
  "Other",
];

export const sortNutrientsByGroup = (nutrients) => {
  return nutrients.sort(compareNutrients);
};

export const compareNutrients = (a, b) => {
  return groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group);
};

export const groupOrderNumber = (nutrient) => {
  return groupOrder.indexOf(nutrient.group);
};

export const groupByNutrientGroup = (nutrients) => groupBy(nutrients, "group");

export const dataSourceIdentifierLookup = {
  BOTH: "Any",
  STANDARD_REFERENCE: "Standard Reference",
  BRANDED_FOOD_PRODUCTS: "Branded Food Products",
};

export const dataSourceIdentifiers = Object.keys(dataSourceIdentifierLookup);

export const decodeDataSourceIdentifier = (identifier) =>
  dataSourceIdentifierLookup[identifier];

export const getNutrient = (food, name) => find(food.nutrients, { name });

export const getNutrientValue = (food, name) =>
  Number(getNutrient(food, name) ? getNutrient(food, name).value : undefined);

export const pivotNutrients = (report) => ({
  ...report,
  nutrients: report.nutrients.reduce(
    (nutrients, nutrient) => ({ ...nutrients, [nutrient.name]: nutrient }),
    {}
  ),
});

export const referenceIntake = {
  Energy: 2000,
  "Total lipid (fat)": 67,
  "Fatty acids, total saturated": 20,
  Cholesterol: 300,
  "Carbohydrate, by difference": 300,
  "Fiber, total dietary": 25,
  Protein: 50,
  "Vitamin C, total ascorbic acid": 60,
  "Vitamin B-6": 1.2,
  "Vitamin B-12": 6,
  "Vitamin E (alpha-tocopherol)": 15,
  "Vitamin K (phylloquinone)": 120,
  Riboflavin: 1.1,
  Thiamin: 1.1,
  Niacin: 14,
  "Folate, DFE": 400,
  "Vitamin A, RAE": 600,
  "Vitamin D": 800,
  "Vitamin D (D2 + D3)": 20,
  "Calcium, Ca": 1000,
  "Iron, Fe": 19,
  "Magnesium, Mg": 420,
  "Phosphorus, P": 700,
  "Sodium, Na": 2400,
  "Potassium, K": 3533,
  "Zinc, Zn": 8,
};

export const labels = {
  "Vitamin C, total ascorbic acid": "Vitamin C",
  "Vitamin B-6": "Vitamin B6",
  "Vitamin B-12": "Vitamin B12",
  "Vitamin E (alpha-tocopherol)": "Vitamin E",
  "Vitamin K (phylloquinone)": "Vitamin E",
  "Calcium, Ca": "Calcium",
  "Iron, Fe": "Iron",
  "Magnesium, Mg": "Magnesium",
  "Phosphorus, P": "Phosphorus",
  "Potassium, K": "Potassium",
  "Sodium, Na": "Sodium",
  "Zinc, Zn": "Zinc",
};
