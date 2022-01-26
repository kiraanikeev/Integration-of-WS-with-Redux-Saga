
const defaultState = {

    logs:[]
}


export const ADD_LOGS = "ADD_LOGS"
export const LS_SAVE = "LS_SAVE"

export const userReducer = (state = defaultState, action)=>{
    switch(action.type){
        case  "ADD_LOGS":
                return {...state, 
                    logs: [...state.logs, {count: state.logs.length + 1}]}
         case  "LS_SAVE":
            const save = JSON.stringify(state);
            localStorage.setItem("logs", save);
      default:
        return state
    }
  

}

export const addLogsActionCreater = ()=> ({type: ADD_LOGS})
export const saveLocalStorageActionCreater = ()=> ({type: LS_SAVE})