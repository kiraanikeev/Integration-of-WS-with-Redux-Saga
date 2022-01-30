import {ADD_LOGS, LS_SAVE, LS_GET} from './constants'

export const addLogsActionCreater = () => ({ type: ADD_LOGS });
export const saveLocalStorageActionCreater = () => ({ type: LS_SAVE });
export const getLocalStorageActionCreater = () => ({ type: LS_GET });