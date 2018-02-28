import { getLevelById } from '../Config/levels';
import { addIdToTiles } from '../Services/Puzzle/initializer';
import { getAvailableActions } from '../Services/Puzzle/actions'
import { findTileById, getActiveTiles } from '../Helpers/Puzzle/tileActions';

// Constants
export const constants = {
  INITIALIZE_PUZZLE: 'INITIALIZE_PUZZLE',
  CLICK_TILE: 'CLICK_TILE',
  TRIGGER_MOVE: 'TRIGGER_MOVE'
};

// Actions
export const actions = {
  initializePuzzle: (levelId) => {
    return { type: constants.INITIALIZE_PUZZLE, payload: { levelId } }
  },
  click: (tileId) => { return { type: constants.CLICK_TILE, payload: { tileId } }},
  triggerMove: (move) => { return { type: constants.TRIGGER_MOVE, payload: { move } }}
};

// Getters
export const getPuzzleFromState = (state) => { return state.puzzle };
export const getAvailableActionsFromState = (state) => { return state.availableActions };

// Default State
export const defaultState = { puzzle: [], availableActions: [] }

// Reducer
export default function PuzzleReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case constants.INITIALIZE_PUZZLE:
      const level = getLevelById(action.payload.levelId)
      return {
        puzzle: addIdToTiles(level, { name: 'click' }),
        availableActions: []
      };
    case constants.CLICK_TILE:
      const tileClicked = findTileById(action.payload.tileId, getPuzzleFromState(state));
      const newPuzzleState = [...getPuzzleFromState(state)];
      newPuzzleState[tileClicked.rowIndex][tileClicked.indexInRow] = Object.assign(
        { ...tileClicked},
        { isActive: !tileClicked.isActive }
      );
      return {
        puzzle: newPuzzleState,
        availableActions: getAvailableActions(newPuzzleState)
      }
    case constants.TRIGGER_MOVE:
      const currentPuzzle = getPuzzleFromState(state);
      return {
        puzzle: action.payload.move(currentPuzzle, getActiveTiles(currentPuzzle)),
        availableActions: []
      };
    default:
      return state;
  }
}