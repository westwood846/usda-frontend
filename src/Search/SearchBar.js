import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery, setDataSource, search } from '../actions';

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
        <label>Search: <input type="text" className="queryInput" value={this.props.searchQuery} onChange={this.handleInputChange} autoFocus/></label><br/>
        Data Source:&nbsp;
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="BOTH" checked={this.props.searchDataSource === 'BOTH'} onChange={this.handleDataSourceChange}></input>Both</label>
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="STANDARD_REFERENCE" checked={this.props.searchDataSource === 'STANDARD_REFERENCE'} onChange={this.handleDataSourceChange}></input>Standard Reference</label>
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="BRANDED_FOOD_PRODUCTS" checked={this.props.searchDataSource === 'BRANDED_FOOD_PRODUCTS'} onChange={this.handleDataSourceChange}></input>Branded Food Products</label>
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
