import React, { useReducer } from 'react';
import number_reducer from './numberreducer';

const Child2 = ()=>{

    let [state,dispact]=useReducer(number_reducer,52)
    return(
        <div>
            Child2 {state}
            <button onClick={()=>{dispact({type:"increment"})}}>increment</button>
            <button onClick={()=>{dispact({type:"decrement"})}}>decrement</button>
        </div>
    );
}

export default Child2;