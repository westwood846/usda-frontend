import React from "react";
import { sortBy, get, times, constant } from "lodash";

import SearchResultItem from "./SearchResultItem";
import { decodeDataSourceIdentifier } from "../usda";

export const SearchResult = ({
  query,
  result,
  searching,
  dataSource,
  error,
}) => {
  const items = !searching
    ? sortBy(get(result, "list.item"), "name")
    : times(7, constant({ loading: true }));
  const ds = decodeDataSourceIdentifier(dataSource);
  const start = get(result, "list.start") + 1;
  const end = Number(get(result, "list.end"));
  const total = get(result, "list.total");

  return error ? (
    error.errors.error.map((error, index) => (
      <div key={index} style={{ color: "red" }}>
        {error.message}
      </div>
    ))
  ) : (
    <div className="SearchResult">
      <div className="descriptor">
        {searching ? (
          <span>
            Searching for "{query}" in "{ds}"
          </span>
        ) : (
          <span>
            Result for "{query}" in "{ds}" ({start} to {end} of {total}):
          </span>
        )}
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <SearchResultItem item={item}></SearchResultItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
