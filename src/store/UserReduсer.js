const defaultState = {
  totalLogsCount: 0,
};

export const ADD_LOGS = "ADD_LOGS";
export const LS_SAVE = "LS_SAVE";
export const LS_GET = "LS_GET";

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

export const addLogsActionCreater = () => ({ type: ADD_LOGS });
export const saveLocalStorageActionCreater = () => ({ type: LS_SAVE });
export const getLocalStorageActionCreater = () => ({ type: LS_GET });
