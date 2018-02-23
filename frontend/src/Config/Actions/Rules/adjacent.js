export default (tileA, tileB) => {
  return Math.abs(tileA.rowIndex - tileB.rowIndex) +
  Math.abs(tileA.indexInRow - tileB.indexInRow) === 1;
}