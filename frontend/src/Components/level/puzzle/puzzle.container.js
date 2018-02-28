import { connect } from 'react-redux'
import { getPuzzleFromState } from '../../../Reducers/puzzle'
import Puzzle from './puzzle.component'

const mapStateToProps = state => {
  return {
    puzzle: getPuzzleFromState(state.puzzle),
  }
}

export default connect(
  mapStateToProps,
  null
)(Puzzle)
