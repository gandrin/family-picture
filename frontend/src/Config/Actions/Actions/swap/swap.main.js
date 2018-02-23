import adjacent from '../../Rules/adjacent'

export default {
  name: 'Swap',
  targetsCount: 2,
  targetsRules: [ adjacent ],
  move: (puzzle, targets) => {
    const newPuzzle = [...puzzle];
    const tileA = { ...targets[0], isActive: false };
    const tileB = { ...targets[1], isActive: false };
    newPuzzle[tileB.rowIndex][tileB.indexInRow] = tileA;
    newPuzzle[tileA.rowIndex][tileA.indexInRow] = tileB;
    return newPuzzle;
  }
}
