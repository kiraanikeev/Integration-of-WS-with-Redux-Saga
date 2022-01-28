import { all } from "redux-saga/effects";
import { initWebSocket } from "./eventChannel";

export function* rootWatcher() {
  yield all([initWebSocket()]);
}
