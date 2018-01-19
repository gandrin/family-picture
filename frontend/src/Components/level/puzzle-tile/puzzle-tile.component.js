import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './puzzle-tile.style.css';

export default class PuzzleTile extends Component {
  render() {
    return (
      <div className="Tile">
        {this.props.content}
      </div>
    );
  }
}

PuzzleTile.propTypes = {
  content: PropTypes.number.isRequired,
}