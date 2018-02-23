import { getLevelById } from '../Config/levels';
import { addIdToTiles } from '../Services/Puzzle/initializer';
import { getAvailableActions } from '../Services/Puzzle/actions'
import { findTileById } from '../Helpers/Puzzle/tileActions';

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

// Getters
export const getPuzzleFromState = (state) => { return state.puzzle };
export const getAvailableActionsFromState = (state) => { return state.availableActions };

// Default State
export const defaultState = { puzzle: [], availableActions: [] }

// Reducer
export default function PuzzleReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case constants.INITIALIZE:
      const level = getLevelById(action.levelId)
      return {
        puzzle: addIdToTiles(level, { name: 'click' }),
        availableActions: []
      };
    case constants.CLICK:
      const tileClicked = findTileById(action.tileId, getPuzzleFromState(state));
      const newPuzzleState = [...getPuzzleFromState(state)];
      newPuzzleState[tileClicked.rowIndex][tileClicked.indexInRow] = Object.assign(
        { ...tileClicked},
        { isActive: !tileClicked.isActive }
      );
      return {
        puzzle: newPuzzleState,
        availableActions: getAvailableActions(newPuzzleState)
      }
    default:
      return state;
  }
}