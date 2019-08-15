import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       query: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange = (event) => {
    this.setState({query: event.target.value});
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <label>Search: <input type="text" value={this.state.query} onChange={this.handleInputChange}/></label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
