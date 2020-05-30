import React from "react";

import { dataSourceIdentifiers, formatDataSource } from "../usda";

const SearchBar = ({ query, setQuery, dataSource, setDataSource }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDataSourceChange = (event) => {
    setDataSource(event.target.value);
  };

  return (
    <div className="SearchBar">
      <label>
        <input
          type="text"
          className="queryInput"
          value={query}
          onChange={handleInputChange}
          autoFocus
        />
      </label>
      <br />
      Data Source:&nbsp;
      {dataSourceIdentifiers.map((identifier) => (
        <label className="dataSourceInputLabel" key={identifier}>
          <input
            type="radio"
            className="dataSourceInput"
            value={identifier}
            checked={dataSource === identifier}
            onChange={handleDataSourceChange}
          ></input>
          {formatDataSource(identifier)}
        </label>
      ))}
    </div>
  );
};

export default SearchBar;
