const defaultState = {
  totalLogsCount: 0,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    //increasing total logs count
    case "ADD_LOGS":
      return { ...state, totalLogsCount: state.totalLogsCount + 1 };
   //save user's "total logs count" from LS
      case "LS_SAVE":
      const save = JSON.stringify(state);
      localStorage.setItem("logs", save);
      //get user's "total logs count" from LS
    case "LS_GET":
      const get = localStorage.getItem("logs");
      const loadedLogs = JSON.parse(get);
      if (loadedLogs) {
        return { ...state, totalLogsCount: loadedLogs.totalLogsCount };
      }
    default:
      return state;
  }
};


