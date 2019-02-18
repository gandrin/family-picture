export default (tileA, tileB) => {
  const adjLine = Math.abs(tileA.rowIndex - tileB.rowIndex) === 1;
  const adjColumn = Math.abs(tileA.indexInRow - tileB.indexInRow) === 1;
  return adjLine && adjColumn;
};
