/**
 * Update tile position
 * @param {array} tiles 
 */

export const updatePositions = (tiles) => {
  if (!Array.isArray(tiles)) {
    throw new Error(`Expected Tiles to be an array received : ${typeof tiles}`);
  }
  return tiles.map((row, rowIndex) => {
    return row.map((tile, indexInRow) => {
      
      return {
        ...tile,
        rowIndex,
        indexInRow,
      }
    })
  })
}
