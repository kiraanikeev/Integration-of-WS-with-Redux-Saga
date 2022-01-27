import { eventChannel, END } from 'redux-saga'
import { call, take, put, takeEvery, actionChannel, takeLatest } from 'redux-saga/effects'
import { ADD_LOGS, LS_SAVE, LS_GET } from '../store/UserReduser'
import { SAVE_DATA, INITIALIZE_WS_CHANNEL, addDataActionCreater } from '../store/LogsReduser'
import { createEventProvider } from './createEventProvider'
import { buffers } from 'redux-saga'

const createEventProviderChannel = (eventProvider) => {
  return eventChannel((emit) => {
       eventProvider.onopen = function(event) {
            console.log("Соединение установлено.");
                }
        eventProvider.onmessage = function (message) {
            // console.log('Message: %s', message.data);
    emit(message.data)
          };
    return () => {
        eventProvider.close()
    }
  })
}

function* eventChannelSaga() {
  const eventProvider = new WebSocket("ws://localhost:5000");
  console.log('eventProvider',eventProvider)
  const eventProviderChannel = yield call(
    createEventProviderChannel,
    eventProvider
  )
  try {
    while (true) {
      const payload = yield take(eventProviderChannel)
      yield put(addDataActionCreater(payload))
       // yield put({ type: LS_GET})
      yield put({ type: ADD_LOGS})
      yield put({ type: LS_SAVE})
      debugger;
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    console.log('event channel terminated')
  }
}

export function * initWebSocket() {
  yield takeEvery(INITIALIZE_WS_CHANNEL, eventChannelSaga);
}