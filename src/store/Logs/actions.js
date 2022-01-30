import {INITIALIZE_WS_CHANNEL, DATA_WS} from './constants'

export const dataActionCreater = () => ({ type: INITIALIZE_WS_CHANNEL });
export const addDataActionCreater = (payload) => ({ type: DATA_WS, payload });
