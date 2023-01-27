// Introducing Reduce

/*Reducer is when wenn the state managment is more complex fr if a state of a value depense on another state, then you use reducer to get the accurate latesed veriosn of that */

//This is the basic setup of the reducer
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFN);

//state returns the lateds state snapshot

//dispatchFn updates states (like in useState) it transfers a action with it and this will be passed to the first argument of the Reducer (reducerFn)

//reducerFn will be called by react and get the action that is triggerd by and returns a new state

// you have a inital state as object and a initFn that runs if the state is more complex

/* actually doing  */

import React, { useReducer } from "react";

const reducerFn = (state, action) => {
    if (action.action === 'NEW_ACTION_INPUT') {
        return {value: action.val}  //state wird geupdated und es wird etwas neues returnd 
    }
    if (action.action === "INPUT_BLUR") {
        return {value: state.value} //gibt die zuletz upgedatede form vom useState zurück
    }
  return { value: "" };
};

const useReduce = (props) => {
  const [state, dispatchFn] = useReducer(
    reducerFn,
    {
      value: "",
    },
    initFN
  );

  const inputhandler = (event) =>{
      dispatchFn(
          {action:'NEW_ACTION_INPUT', val:event.target.value}
      )
  }

  const someother = () =>{
      dispatchFn(
          {action:'INPUT_BLUR'}
      )
  }

  const liftupdata = () =>{
      props.somefunction(state.value)
  }

  return <input onchange={inputhandler} onBlur={someother} value={state.value}></input>;
};

export default useReduce;
