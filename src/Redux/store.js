// import reducer from './reducer';
// import {legacy_createStore as  createStore} from 'redux';
//const store = createStore(reducer);
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counterSlice";
import authSlice from "./authSlice/authslice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions
export default store;
