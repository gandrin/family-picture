/**
 * Add required fields to tiles
 * Functions to bind take a unique argument Id and should return a new function
 * @param {array} tiles 
 * @param {array of objects { functionGenerator: {func}, name: {string}  }} functions 
 */

export const addIdToTiles = (tiles, ...functions) => {
  if (!Array.isArray(tiles)) {
    throw new Error(`Expected Tiles to be a array received : ${typeof tiles}`);
  }
  let currentTileId = 0;
  return tiles.map((row, rowIndex) => {
    return row.map((tile, indexInRow) => {
      return {
        ...tile,
        id: ++currentTileId,
        rowIndex,
        indexInRow,
        ...formatFunctions(currentTileId, functions)
      }
    })
  })
}

/**
 * Returns an object with a property for each given function
 * Functions to bind take a unique argument Id and should return a new function
 * @param {int} tileId 
 * @param {array of objects { functionGenerator: {func}, name: {string}  }} functions 
 */

export const formatFunctions = (tileId, functions = []) => {
  if (!Array.isArray(functions)) {
    throw new Error(`Expected functions to be a array received : ${typeof functions}`);
  }
  const functionsToAdd = {};

  functions.forEach(({ name, functionGenerator }, functionIndex) => {
    if (!name || typeof name !== 'string') {
      throw new Error(`Name is missing or is not a string for function ${functionIndex}`);
    }
    if (!functionGenerator || typeof functionGenerator !== 'function' ) {
      throw new Error(
        `functionGenerator is missing or is not a function for function ${name}`
      );
    }
    const generatedFunction = functionGenerator(tileId);
    if (typeof generatedFunction !== 'function' ) {
      throw new Error(
        `FunctionGenerator does not return a function for function ${name}`
      );
    }
    functionsToAdd[name] = generatedFunction;
  })
  return functionsToAdd;
}
