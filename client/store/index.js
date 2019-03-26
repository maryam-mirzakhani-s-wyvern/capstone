import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import morningEntry from './morning-entry'
import eveningEntry from './evening-entry'
import history from './history-page'

const reducer = combineReducers({user, morningEntry, eveningEntry, history})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './morning-entry'
export * from './evening-entry'
