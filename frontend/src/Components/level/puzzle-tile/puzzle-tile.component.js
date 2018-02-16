import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './puzzle-tile.style.css';

export default class PuzzleTile extends Component {
  render() {
    return (
      <div
        className="Tile"
        onClick={() => this.props.click(this.props.id)}
        is-active={`${this.props.isActive}`}
      >
        {this.props.content}
      </div>
    );
  }
}

PuzzleTile.defaultProps = {
  isActive: false,
  click: () => { }
}

PuzzleTile.propTypes = {
  content: PropTypes.any,
  id: PropTypes.number,
  isActive: PropTypes.bool,
  click: PropTypes.func,
}