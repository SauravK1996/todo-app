import React,{useContext, useReducer} from 'react';
import {UserContext} from './index';

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return initialState;
    default: 
      return initialState;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);

  return(
    <div>
      Hello, {value} <br/>
      Count: {state.count}
      <button className="border m-1 p-1" onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button className="border m-1 p-1" onClick={() => dispatch({type: "decrement"})}>Decrement</button>
      <button className="border m-1 p-1" onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );

  // return(
  //   <div>
  //     Hello, {value}
  //   </div>
  // );

  // return(
  //   <div>
  //     <UserContext.Consumer>
  //       {value => <div>Hello, {value}</div>}
  //     </UserContext.Consumer>
  //   </div>
  // );
}

export default App;