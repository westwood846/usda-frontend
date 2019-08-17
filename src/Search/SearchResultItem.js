import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends Component {
  render() {
    return (
      <div className="SearchResultItem">
        <Link to={`/report/${this.props.item.ndbno}`}><h3>{this.props.item.name}</h3></Link>
        <div className="SearchResultItem-meta">
          <span className="SearchResultItem-metaDescriptor"><strong>ndbno: </strong>{this.props.item.ndbno}</span>
          <span className="SearchResultItem-metaDescriptor"><strong>Manufacturer: </strong>{this.props.item.manu}</span>
          <span className="SearchResultItem-metaDescriptor"><strong>Data Source: </strong>{this.props.item.ds}</span>
        </div>
      </div>
    )
  }
}

export default SearchResultItem;
