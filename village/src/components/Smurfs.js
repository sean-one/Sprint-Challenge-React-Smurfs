import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to='/smurf-form'>
          <button>ADD Smurf</button>
        </Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return <Smurf name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>;
  }
}

Smurfs.propTypes = {
 smurfs: PropTypes.array
};

export default Smurfs;
