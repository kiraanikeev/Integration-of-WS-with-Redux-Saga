import {all} from "redux-saga/effects"
import { eventChannelSaga} from "./eventChannel"



export function* rootWatcher(){
    yield all([eventChannelSaga()])
}