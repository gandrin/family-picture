import { getLevelById } from "../Config/Content/Levels";
import { addIdToTiles } from "../Services/Puzzle/initializer";
import {
  getAvailableActions,
  isPuzzleFinished
} from "../Services/Puzzle/actions";
import { findTileById, getActiveTiles } from "../Helpers/Puzzle/tileActions";

// Constants
export const constants = {
  INITIALIZE_PUZZLE: "INITIALIZE_PUZZLE",
  CLICK_TILE: "CLICK_TILE",
  TRIGGER_MOVE: "TRIGGER_MOVE"
};

// Actions
export const actions = {
  initializePuzzle: levelId => {
    return { type: constants.INITIALIZE_PUZZLE, payload: { levelId } };
  },
  click: tileId => {
    return { type: constants.CLICK_TILE, payload: { tileId } };
  },
  triggerMove: move => {
    return { type: constants.TRIGGER_MOVE, payload: { move } };
  }
};

// Getters
export const getPuzzleFromState = state => {
  return state.puzzle;
};
export const getAvailableActionsFromState = state => {
  return state.availableActions;
};
export const getLevelIdFromState = state => {
  return state.levelId;
};
export const getIsFinishedFromState = state => {
  return state.isFinished;
};

// Default State
export const defaultState = {
  puzzle: [],
  availableActions: [],
  level: null,
  isFinished: false
};

// Reducer
export default function PuzzleReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case constants.INITIALIZE_PUZZLE:
      const levelId = action.payload.levelId;
      const level = getLevelById(levelId);
      return {
        ...defaultState,
        puzzle: addIdToTiles(level.start, { name: "click" }),
        levelId
      };
    case constants.CLICK_TILE:
      const tileClicked = findTileById(
        action.payload.tileId,
        getPuzzleFromState(state)
      );
      const newPuzzleState = [...getPuzzleFromState(state)];
      newPuzzleState[tileClicked.rowIndex][
        tileClicked.indexInRow
      ] = Object.assign(
        { ...tileClicked },
        { isActive: !tileClicked.isActive }
      );
      return {
        ...state,
        puzzle: newPuzzleState,
        availableActions: getAvailableActions(newPuzzleState)
      };
    case constants.TRIGGER_MOVE:
      const currentPuzzle = getPuzzleFromState(state);
      const newPuzzle = action.payload.move(
        currentPuzzle,
        getActiveTiles(currentPuzzle)
      );
      const isFinished = isPuzzleFinished(currentPuzzle);

      return {
        ...state,
        puzzle: newPuzzle,
        availableActions: [],
        isFinished
      };
    default:
      return state;
  }
}
