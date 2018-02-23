import Content from './Content';

export const getLevelById = (levelId) => {
  if (!levelId || levelId <= 0) {
    throw new Error('Invalid levelId');
  }
  return levels[levelId];
}

export const levels = {
  1: [
    [Content.DEFAULT, Content.DEFAULT, Content.DEFAULT],
    [Content.DEFAULT, Content.DEFAULT, Content.DEFAULT],
    [Content.DEFAULT, Content.DEFAULT, Content.DEFAULT],
  ],
}

