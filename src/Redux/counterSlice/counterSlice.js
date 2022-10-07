//import * as actions from "./actionType";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
      increment(state) {
        state.counter++
      },
      decrement(state) {
          state.counter--
      },
      increaseby5(state,action) {
       state.counter = state.counter + action.payload
      },
      toggle(state) {
       state.showCounter = !state.showCounter
      }

  }
});

export default counterSlice

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.INCREMENT:
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case actions.DECREMENT:
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case actions.INCREASEBY5:
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//     case actions.TOGGLE:
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// }
