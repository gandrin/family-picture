import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './puzzle.style.css';

import PuzzleTile from '../puzzle-tile';

export default class Puzzle extends Component {
  render() {
    return (
      <div className="Puzzle">
        {
          this.props.level.map((puzzleLine) => {
            return (
              <div className="PuzzleLine">
                {
                  puzzleLine.map(() => {
                    return (
                      <PuzzleTile />
                    )
                  })
                }
              </div>
            )
          })
        }
        <PuzzleTile content={} />
      </div>
    );
  }
}

Puzzle.propTypes = {
  level: PropTypes.arrayOf(PropTypes.array).isRequired,
}