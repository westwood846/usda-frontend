import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery, setDataSource, search } from '../actions';
import { dataSourceIdentifiers, decodeDataSourceIdentifier } from '../usda';
import { push } from 'connected-react-router'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDataSourceChange = this.handleDataSourceChange.bind(this);
  }

  stringifyState = (query=this.props.searchQuery, dataSource=this.props.searchDataSource) => {
    return `?query=${query}&dataSource=${dataSource}`;
  }
  
  handleInputChange = (event) => {
    this.props.setQuery(event.target.value);
    this.props.push(this.stringifyState(event.target.value));
    if (this.props.searchQuery) this.props.search();
  }
  
  handleDataSourceChange = (event) => {
    this.props.setDataSource(event.target.value);
    this.props.push(this.stringifyState(undefined, event.target.value));
    if (this.props.searchQuery) this.props.search();
  }

  render() {

    return (
      <div className="SearchBar">
        <label><input type="text" className="queryInput" value={this.props.searchQuery} onChange={this.handleInputChange} autoFocus/></label><br/>
        Data Source:&nbsp;
        {dataSourceIdentifiers.map(identifier => (
          <label className="dataSourceInputLabel" key={identifier}>
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
  search,
  push
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
