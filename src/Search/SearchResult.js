import React from "react";
import { sortBy } from "lodash";

import SearchResultItem from "./SearchResultItem";

export const SearchResult = ({ result }) => {
  const items = sortBy(result.list.item, "name");
  const query = result.list.q;
  const ds = result.list.ds;
  const start = result.list.start + 1;
  const end = Number(result.list.end);
  const total = result.list.total;

  return (
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
  );
};

export default SearchResult;
