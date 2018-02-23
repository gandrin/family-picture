import { connect } from 'react-redux'
import { actions as PuzzleActions } from '../../Reducers/puzzle'
import Level from './level.component'

const mapDispatchToProps = dispatch => {
  return {
    initializePuzzle: (levelId) => dispatch(PuzzleActions.initializePuzzle(levelId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Level)
