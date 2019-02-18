import LEVEL_1 from "./level-1";

export const getLevelById = levelId => {
  if (!levelId || levelId <= 0) {
    throw new Error("Invalid levelId");
  }
  return levels[levelId];
};

export const levels = {
  1: LEVEL_1
};
