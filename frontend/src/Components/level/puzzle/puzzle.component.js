import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './puzzle.style.css';

import PuzzleTile from '../puzzle-tile';

export default class Puzzle extends Component {
  render() {
    return (
      <div className="Puzzle">
        {
          this.props.puzzle.map((puzzleLine, index) => {
            return (
              <div key={index} className="PuzzleLine">
                {
                  puzzleLine.map((tileContent) => {
                    return (
                      <PuzzleTile
                        content={tileContent}
                        key={tileContent}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

Puzzle.defaultProps = {
  puzzle: [],
}

Puzzle.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.array),
}