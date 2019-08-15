import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
  render() {
    let fragments = this.props.name.split(', ');
    return (
      <div className="Breadcrumbs">
        {fragments.map((fragment, index, fragments) => 
          <span key={index}>
            &nbsp;/&nbsp;
            <Link to={{pathname: "/search", search: `?query=${fragments.slice(0, index + 1).join(', ')}`}} className="Breadcrumbs-item">
              {fragment}
            </Link>
          </span>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs)
