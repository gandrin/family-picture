import { getLevelById } from '../Config/levels';
import { addIdToTiles } from '../Services/Puzzle/initializer';
import { findTileById } from '../Services/Puzzle/tileActions';

// Constants
export const constants = {
  INITIALIZE: 'INITIALIZE',
  CLICK: 'CLICK',
};

// Actions
export const actions = {
  initializePuzzle: (levelId) => { return { type: constants.INITIALIZE, levelId }},
  click: (tileId) => { return { type: constants.CLICK, tileId }},
};

// Wrapped actions
const wrappedClick = (tileId) => { return () => actions.click(tileId)};

// Reducer
export default function PuzzleReducer(state = [], action = {}) {
  switch (action.type) {
    case constants.INITIALIZE:
      const level = getLevelById(action.levelId)
      return addIdToTiles(level, { name: 'click', functionGenerator: wrappedClick });
    case constants.CLICK:
      const tileClicked = findTileById(action.tileId, state);
      const newPuzzleState = [...state];
      newPuzzleState[tileClicked.rowIndex][tileClicked.indexInRow] = Object.assign({ ...tileClicked}, { isActive: !tileClicked.isActive });
      return newPuzzleState;
    default:
      return state;
  }
}