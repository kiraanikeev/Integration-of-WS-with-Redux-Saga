import { eventChannel} from "redux-saga";
import {
  call,
  take,
  put,
  takeEvery,
} from "redux-saga/effects";
import { ADD_LOGS, LS_SAVE, LS_GET } from "../store/UserReduсer";
import {
  INITIALIZE_WS_CHANNEL,
  addDataActionCreater,
} from "../store/LogsReduсer";


const createEventProviderChannel = (eventProvider) => {
  return eventChannel((emit) => {
    eventProvider.onopen = function (event) {
      console.log("The connection is established");
    };
    eventProvider.onmessage = function (message) {
      emit(message.data);
    };
    return () => {
      eventProvider.close();
    };
  });
};

function* eventChannelSaga() {
  const eventProvider = new WebSocket("ws://localhost:5000");
  const eventProviderChannel = yield call(
    createEventProviderChannel,
    eventProvider
  );
  try {
    while (true) {
      const payload = yield take(eventProviderChannel);
      //send the received data to the LogsReduсer
      yield put(addDataActionCreater(payload));
      //get user's "total logs count" from LS
      yield put({ type: LS_GET})
      //send user's "total logs count" to the UserReduсer
      yield put({ type: ADD_LOGS });
      //save user's "total logs count" from LS
      yield put({ type: LS_SAVE });
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("event channel terminated");
  }
}

export function* initWebSocket() {
  yield takeEvery(INITIALIZE_WS_CHANNEL, eventChannelSaga);
}
