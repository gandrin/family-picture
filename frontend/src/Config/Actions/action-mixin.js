import { updatePositions } from '../../Helpers/Puzzle/position';

export const isAvailableGenerator = (action) => {
  return (targets) => {
    if (!Array.isArray(targets) || targets.length !== action.targetsCount) {
      return false;
    }
    for( const rule of action.targetsRules ) {
      if (!rule(...targets)) {
        return false
      }
    }
    return true;
  }
};

export const moveGenerator = (action) => {
  return (puzzle, targets) => {
    return updatePositions(action.move(puzzle, targets));
  };
}

export default (action) => {
  return {
    isAvailable: isAvailableGenerator(action),
    move: moveGenerator(action),
    identifier: action.name
  }
}

