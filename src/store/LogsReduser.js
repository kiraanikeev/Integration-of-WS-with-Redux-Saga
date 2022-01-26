
const defaultState = {
    logs:[]
}

export const ADD_LOGS = "ADD_LOGS"

export const logsReducer = (state = defaultState, action)=>{

    switch(action.type){
        case  "ADD_LOGS":
                    return {...state, 
                logs: [...state.logs, {count: state.logs.length + 1}]}
          
      default:
        return state
    }
  }


  export const addLogsActionCreater = ()=> ({type: ADD_LOGS})