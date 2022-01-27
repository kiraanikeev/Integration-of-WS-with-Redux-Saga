import { createStore, combineReducers, applyMiddleware } from 'redux';
import {logsReducer} from './LogsReduser'
import { userReducer } from './UserReduser';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga/index"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
logs: logsReducer,
user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)