import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <label>Search: <input type="text" value={this.props.searchQuery} onChange={this.handleInputChange}/></label>
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
