import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <Link to="/search"><h1>USDA</h1></Link>
      </div>
    )
  }
}

export default Logo;
