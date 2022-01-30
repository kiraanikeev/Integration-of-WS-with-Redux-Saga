const defaultState = {
  logsData: [],
};

export const logsReducer = (state = defaultState, action) => {
  switch (action.type) {
    //displaying data from WS
    case "DATA_WS":
          return { ...state, logsData: [...state.logsData, { time: action.payload }] };
    default:
      return state;
  }
};

