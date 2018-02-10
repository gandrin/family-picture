import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './puzzle-tile.style.css';

export default class PuzzleTile extends Component {
  render() {
    return (
      <div
        className="Tile"
        onClick={this.props.onClick}
      >
        {this.props.content}
      </div>
    );
  }
}

PuzzleTile.defaultProps = {
  isActive: false,
  onClick: () => {},
}

PuzzleTile.propTypes = {
  content: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}