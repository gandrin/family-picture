import Default from './Content/Content/default';

export const getLevelById = (levelId) => {
  if (!levelId || levelId <= 0) {
    throw new Error('Invalid levelId');
  }
  return levels[levelId];
}

export const levels = {
  1: [
    [Default, Default, Default],
    [Default, Default, Default],
    [Default, Default, Default],
  ],
}

