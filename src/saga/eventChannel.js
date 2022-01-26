import { eventChannel, END } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'
import { ADD_LOGS, LS_SAVE } from '../store/UserReduser'
import { createEventProvider } from './createEventProvider'

const createEventProviderChannel = (eventProvider) => {
  return eventChannel((emit) => {
    const valueHandler = (event) => {
      if (event.payload > 2) {
        emit(END)
        return
      }
      emit(event.payload)
    }
    eventProvider.subscribe('value', valueHandler)
    return () => {
      eventProvider.unsubscribe('value', valueHandler)
      console.log('unsubscribed')
    }
  })
}

export function* eventChannelSaga() {
  const eventProvider = yield call(createEventProvider)
  const eventProviderChannel = yield call(
    createEventProviderChannel,
    eventProvider
  )
  try {
    while (true) {
      const payload = yield take(eventProviderChannel)
      console.log('payload from event channel', payload)
      yield put({ type: ADD_LOGS})
      yield put({ type: LS_SAVE})
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    console.log('event channel terminated')
  }
}
