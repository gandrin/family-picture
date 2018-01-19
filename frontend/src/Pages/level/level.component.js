import React, { Component } from 'react';
import './level.style.css';

import Puzzle from '../../Components/level/puzzle';

const levelConfiguration = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default class Level extends Component {
  render() {
    return (
      <div className="Level">
        <Puzzle level={levelConfiguration} />
      </div>
    );
  }
}