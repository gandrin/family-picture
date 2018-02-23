
/**
 * Search a tile by Id in a level
 * @param {int} tileId 
 * @param {array} tiles 
 * @returns {object} The tile with the given Id or undefined if none matched
 */

export const findTileById = (tileId, tiles) => {
  if (!Number.isInteger(tileId)) {
    throw new Error(`Expected tileId to be an integer received : ${typeof tileId}`);
  }
  if (!Array.isArray(tiles)) {
    throw new Error(`Expected Tiles to be a array received : ${typeof tiles}`);
  }
  for( const row of tiles) {
    const tileFound = row.find((tile) => {
      return tile.id === tileId;
    })
    if (tileFound) { return tileFound; }
  }
  return undefined;
}

/**
 * Returns the list of currently active tiles in the puzzle
 * @param {*} tiles 
 */
export const getActiveTiles = (tiles) => {
  if (!Array.isArray(tiles)) {
    throw new Error(`Expected Tiles to be a array received : ${typeof tiles}`);
  }
  let activeTiles = [];
  for( const row of tiles) {
    const activeTilesInRow = row.filter((tile) => {
      return tile.isActive;
    })
    activeTiles = [ ...activeTiles, ...activeTilesInRow ];
  }
  return activeTiles;
}
