import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery, setDataSource, search } from '../actions';
import { dataSourceIdentifiers, decodeDataSourceIdentifier } from '../usda';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDataSourceChange = this.handleDataSourceChange.bind(this);
  }
  
  handleInputChange = (event) => {
    this.props.setQuery(event.target.value);
    if (this.props.searchQuery) this.props.search();
  }
  
  handleDataSourceChange = (event) => {
    this.props.setDataSource(event.target.value);
    if (this.props.searchQuery) this.props.search();
  }

  render() {

    return (
      <div className="SearchBar">
        <label><input type="text" className="queryInput" value={this.props.searchQuery} onChange={this.handleInputChange} autoFocus/></label><br/>
        Data Source:&nbsp;
        {dataSourceIdentifiers.map(identifier => (
          <label className="dataSourceInputLabel">
            <input type="radio" className="dataSourceInput" value={identifier} checked={this.props.searchDataSource === identifier} onChange={this.handleDataSourceChange}></input>
            {decodeDataSourceIdentifier(identifier)}
          </label>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.app.searchQuery,
  searchDataSource: state.app.searchDataSource
});

const mapDispatchToProps = {
  setQuery,
  setDataSource,
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
