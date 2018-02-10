import { getLevelById } from '../Config/levels';

export const constants = {
  INITIALIZE: 'INITIALIZE',
};

export const actions = {
  initializePuzzle: (levelId) => { return { type: constants.INITIALIZE, levelId }},
  makeAMove: () => {},
};

export default function PuzzleReducer(state = [], action = {}) {
  switch (action.type) {
    case constants.INITIALIZE:
      return getLevelById(action.levelId)
    default:
      return state;
  }
}