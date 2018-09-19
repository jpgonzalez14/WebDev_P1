import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Municipio extends Component {

  render() {

    return (
      <div>
        <p key={this.props.municipio._id}>{this.props.municipio.departamento}</p>
      </div>
    );
  }
}


export default Municipio;
