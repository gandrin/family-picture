import { connect } from 'react-redux'
import {
  actions as PuzzleActions,
  getAvailableActionsFromState
} from '../../../Reducers/puzzle'
import Actions from './actions.component'

const mapStateToProps = state => {
  return {
    availableActions: getAvailableActionsFromState(state.puzzle)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    triggerMove: (move) => dispatch(PuzzleActions.triggerMove(move))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
