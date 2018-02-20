import { getActiveTiles } from "../../Helpers/Puzzle/tileActions";

/**
 * Returns the available actions for the current puzzle state
 * @param {*} puzzle 
 */
export const getAvailableActions = (puzzle) => {
  if (!Array.isArray(puzzle)) {
    throw new Error(`Expected Puzzle to be an array received : ${typeof puzzle}`);
  }
  const activeTiles = getActiveTiles(puzzle);
  return [];
}
