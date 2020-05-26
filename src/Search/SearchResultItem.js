import React from "react";
import { Link } from "react-router-dom";

export const SearchResultItem = ({ item }) => {
  return (
    <div className="SearchResultItem">
      <Link to={`/report/${item.ndbno}`}>
        <h3>{item.name}</h3>
      </Link>
      <div className="SearchResultItem-meta">
        <span className="SearchResultItem-metaDescriptor">
          <strong>ndbno: </strong>
          {item.ndbno}
        </span>
        <span className="SearchResultItem-metaDescriptor">
          <strong>Manufacturer: </strong>
          {item.manu}
        </span>
        <span className="SearchResultItem-metaDescriptor">
          <strong>Data Source: </strong>
          {item.ds}
        </span>
      </div>
    </div>
  );
};

export default SearchResultItem;
