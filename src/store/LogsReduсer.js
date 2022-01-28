const defaultState = {
  logs: [],
};
export const INITIALIZE_WS_CHANNEL = "INITIALIZE_WS_CHANNEL";
export const DATA_WS = "DATA_WS";

export const logsReducer = (state = defaultState, action) => {
  switch (action.type) {
    //displaying data from WS
    case "DATA_WS":
      return { ...state, logs: [...state.logs, { logData: action.payload }] };
    default:
      return state;
  }
};

export const iDataActionCreater = () => ({ type: INITIALIZE_WS_CHANNEL });
export const addDataActionCreater = (payload) => ({ type: DATA_WS, payload });
