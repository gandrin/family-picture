import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './puzzle-tile.style.css'

export default class PuzzleTile extends Component {
  render() {
    return (
      <div
        className="Tile"
        onClick={() => this.props.click(this.props.tileId)}
        is-active={`${this.props.isActive}`}
      >
        {this.props.content} {this.props.tileId}
      </div>
    )
  }
}

PuzzleTile.defaultProps = {
  isActive: false,
  click: () => {}
}

PuzzleTile.propTypes = {
  content: PropTypes.any,
  tileId: PropTypes.number,
  isActive: PropTypes.bool,
  click: PropTypes.func
}
