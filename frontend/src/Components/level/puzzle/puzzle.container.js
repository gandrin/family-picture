import { connect } from 'react-redux'
import { actions as PuzzleActions } from '../../../Reducers/puzzle'
import Puzzle from './puzzle.component'

const mapStateToProps = state => {
  return {
    puzzle: state.puzzle,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: args => dispatch(PuzzleActions.makeAMove(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle)
