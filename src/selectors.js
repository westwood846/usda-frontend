import { createSelector } from "reselect";

export const cachedReports = (state) => state.app.reports;
export const cachedReportsIds = createSelector([cachedReports], Object.keys);
export const cachedReportsAsArray = createSelector(
  [cachedReports],
  Object.values
);
