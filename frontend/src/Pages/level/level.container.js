import { connect } from 'react-redux'
import {
  actions as PuzzleActions,
  getIsFinishedFromState
} from '../../Reducers/puzzle'
import Level from './level.component'

const mapDispatchToProps = dispatch => {
  return {
    initializePuzzle: levelId =>
      dispatch(PuzzleActions.initializePuzzle(levelId))
  }
}

const mapStateToProps = state => {
  return {
    isFinished: getIsFinishedFromState(state.puzzle)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level)
