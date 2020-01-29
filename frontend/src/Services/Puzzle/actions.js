import { getActiveTiles } from '../../Helpers/Puzzle/tileActions'
import { unique } from '../../Helpers/array'
import PuzzleNotFinished from '../../Models/Errors/puzzle-not-finished'

/**
 * Returns the available actions for the current puzzle state
 *
 * @param Array puzzle
 *
 * @returns Array
 */
export const getAvailableActions = puzzle => {
  if (!Array.isArray(puzzle)) {
    throw new Error(
      `Expected Puzzle to be an array received : ${typeof puzzle}`
    )
  }
  const activeTiles = getActiveTiles(puzzle)
  const availableActionsWithDoubles = activeTiles.reduce(
    (availableActions, tile) => {
      return [
        ...availableActions,
        ...tile.actions.filter(action => {
          return action.isAvailable(activeTiles)
        })
      ]
    },
    []
  )
  return unique(availableActionsWithDoubles, 'identifier')
}

/**
 * Returns true if the current status of the puzzle matches the ending configuration based on the tile ids
 *
 * @param Array puzzle
 * @param Array expectedConfiguration
 *
 * @returns Boolean
 */
export const isPuzzleFinished = (puzzle, expectedConfiguration) => {
  if (!Array.isArray(puzzle) || !Array.isArray(expectedConfiguration)) {
    throw new Error(
      `Expected puzzle and expectedConfiguration to be arrays received :
        - puzzle: ${typeof puzzle}
        - configuration: ${typeof expectedConfiguration}`
    )
  }
  try {
    puzzle.forEach((puzzleLine, rowIndex) => {
      puzzleLine.forEach((tile, indexInRow) => {
        const expectedTile = expectedConfiguration[rowIndex][indexInRow]
        if (expectedTile.id && expectedTile.id !== tile.id) {
          throw new PuzzleNotFinished('Puzzle is not finished')
        }
      })
    })
  } catch (error) {
    if (error instanceof PuzzleNotFinished) {
      return false
    }
    throw error
  }
  return true
}
