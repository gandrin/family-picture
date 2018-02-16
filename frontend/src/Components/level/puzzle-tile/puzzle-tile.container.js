import { connect } from 'react-redux'
import { actions as PuzzleActions } from '../../../Reducers/puzzle'
import PuzzleTile from './puzzle-tile.component'

const mapDispatchToProps = dispatch => {
  return {
    click: (tileId) => dispatch(PuzzleActions.click(tileId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PuzzleTile)
