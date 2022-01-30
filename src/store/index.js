import { createStore, combineReducers, applyMiddleware } from "redux";
import { logsReducer } from "./Logs/LogsReduсer";
import { userReducer } from "./User/UserReduсer";
import { rootWatcher } from "../saga/index";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  logs: logsReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
