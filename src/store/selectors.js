import { createSelector } from "reselect";

export const getLogs = createSelector((state)=>state.logs, 
  (logs)=>logs.logsData);

export const getCount = createSelector((state)=>state.user, 
  (user)=>user);