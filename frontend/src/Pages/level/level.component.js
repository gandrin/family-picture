import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './level.style.css'

import Puzzle from '../../Components/level/puzzle'
import Actions from '../../Components/level/actions'

export default class Level extends Component {
  componentDidMount() {
    this.props.initializePuzzle(1)
  }

  render() {
    return (
      <div className="Level">
        {this.props.isFinished ? 'YEAAAAAH' : 'Nooot yet'}
        <div className="Level-container">
          <Puzzle />
        </div>
        <Actions />
      </div>
    )
  }
}

Level.propTypes = {
  initializePuzzle: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired
}
