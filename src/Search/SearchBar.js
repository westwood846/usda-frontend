import React from "react";

import { dataSourceIdentifiers, formatDataSource } from "../usda";
import {
  Box,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const SearchBar = ({ query, setQuery, dataSource, setDataSource }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDataSourceChange = (event) => {
    setDataSource(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        autoFocus
      />
      <FormControl component="fieldset" hiddenLabel={true}>
        <RadioGroup
          row
          aria-label="Data Source"
          name="dataSource"
          value={dataSource}
          onChange={handleDataSourceChange}
        >
          {dataSourceIdentifiers.map((identifier) => (
            <FormControlLabel
              value={identifier}
              control={<Radio />}
              label={formatDataSource(identifier)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
