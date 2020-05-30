import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setQuery, setDataSource, search } from "../actions";
import { dataSourceIdentifiers, decodeDataSourceIdentifier } from "../usda";
import { push } from "connected-react-router";
import useDebounce from "../common/useDebounce";

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
          {decodeDataSourceIdentifier(identifier)}
        </label>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // searchQuery: state.app.searchQuery,
  // searchDataSource: state.app.searchDataSource,
});

const mapDispatchToProps = {
  // setQuery,
  // setDataSource,
  // search,
  // push,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
