import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './puzzle.style.css';

import PuzzleTile from '../puzzle-tile';

export default class Puzzle extends Component {
  render() {
    return (
      <div className="Puzzle">
        {
          this.props.level.map((puzzleLine, index) => {
            return (
              <div key={index} className="PuzzleLine">
                {
                  puzzleLine.map((tileContent) => {
                    return (
                      <div className="PuzzleTile">
                        <PuzzleTile
                          content={tileContent}
                          key={tileContent}
                        />
                      </div>
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

Puzzle.propTypes = {
  level: PropTypes.arrayOf(PropTypes.array).isRequired,
}