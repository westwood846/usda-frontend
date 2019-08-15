import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDataSourceChange = this.handleDataSourceChange.bind(this);

    this.state = {
      dataSource: 'STANDARD_REFERENCE'
    }
  }
  
  handleInputChange = (event) => {
    this.props.search(event.target.value);
  }

  handleDataSourceChange = (event) => {
    this.setState({dataSource: event.target.value})
  }

  render() {
    return (
      <div className="SearchBar">
        <label>Search: <input type="text" className="queryInput" value={this.props.searchQuery} onChange={this.handleInputChange} autoFocus/></label><br/>
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="BOTH" checked={this.state.dataSource === 'BOTH'} onChange={this.handleDataSourceChange}></input>Both</label>
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="STANDARD_REFERENCE" checked={this.state.dataSource === 'STANDARD_REFERENCE'} onChange={this.handleDataSourceChange}></input>Standard Reference</label>
        <label className="dataSourceInputLabel"><input type="radio" className="dataSourceInput" value="BRANDED_FOOD_PRODUCTS" checked={this.state.dataSource === 'BRANDED_FOOD_PRODUCTS'} onChange={this.handleDataSourceChange}></input>Branded Food Products</label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.app.searchQuery
});

const mapDispatchToProps = {
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
