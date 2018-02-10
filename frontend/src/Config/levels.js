export const getLevelById = (levelId) => {
  if (!levelId || levelId <= 0) {
    throw new Error('Invalid levelId');
  }
  return levels[levelId];
}

export const levels = {
  1: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
}

