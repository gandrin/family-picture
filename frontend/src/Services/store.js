import { combineReducers, createStore } from 'redux'
import reducers from '../Reducers'

const rootReducer = combineReducers({...reducers})

export default createStore(rootReducer)