import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './level.style.css';

import Puzzle from '../../Components/level/puzzle';

export default class Level extends Component {

  componentDidMount() {
    this.props.initializePuzzle(1);
  }

  render() {
    return (
      <div className="Level">
        <Puzzle />
      </div>
    );
  }
}

Level.propTypes = {
  initializePuzzle: PropTypes.func.isRequired,
}