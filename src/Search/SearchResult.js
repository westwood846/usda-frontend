import React from "react";
import { sortBy, get } from "lodash";

import SearchResultItem from "./SearchResultItem";

import { decodeDataSourceIdentifier } from "../usda";

export const SearchResult = ({ result, searching, dataSource, error }) => {
  const items = sortBy(get(result, "list.item"), "name");
  const query = get(result, "list.q");
  const ds = get(result, "list.ds");
  const start = get(result, "list.start") + 1;
  const end = Number(get(result, "list.end"));
  const total = get(result, "list.total");

  return searching ? (
    <span>
      Searching for "{query}" in {decodeDataSourceIdentifier(dataSource)}...
    </span>
  ) : error ? (
    error.errors.error.map((error, index) => (
      <div key={index} style={{ color: "red" }}>
        {error.message}
      </div>
    ))
  ) : result ? (
    <div className="SearchResult">
      <div className="descriptor">
        Result for "{query}" in "{ds}" ({start} to {end} of {total}):
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <SearchResultItem item={item}></SearchResultItem>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SearchResult;
