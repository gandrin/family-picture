import { getActiveTiles } from "../../Helpers/Puzzle/tileActions";
import { unique } from "../../Helpers/array";

/**
 * Returns the available actions for the current puzzle state
 * @param {*} puzzle 
 */
export const getAvailableActions = (puzzle) => {
  if (!Array.isArray(puzzle)) {
    throw new Error(`Expected Puzzle to be an array received : ${typeof puzzle}`);
  }
  const activeTiles = getActiveTiles(puzzle);
  const availableActionsWithDoubles = activeTiles.reduce(
    (availableActions, tile) => {
      return [
        ...availableActions,
        ...tile.actions.filter((action) => { return action.isAvailable(activeTiles); })
      ];
    },
    []
  );
  return unique(availableActionsWithDoubles, 'identifier');
}
