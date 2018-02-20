/**
 * Add required fields to tiles
 * Functions to bind take a unique argument Id and should return a new function
 * @param {array} tiles 
 * @param {array of objects { functionGenerator: {func}, name: {string}  }} functions 
 */

export const addIdToTiles = (tiles, ...functions) => {
  if (!Array.isArray(tiles)) {
    throw new Error(`Expected Tiles to be an array received : ${typeof tiles}`);
  }
  let currentTileId = 0;
  return tiles.map((row, rowIndex) => {
    return row.map((tile, indexInRow) => {
      return {
        ...tile,
        id: ++currentTileId,
        rowIndex,
        indexInRow,
      }
    })
  })
}
