import React, { useContext } from 'react';
import counterContext from './countercontext';

const Child=(props)=>{

    let countervalue = useContext(counterContext)
    console.log(countervalue);
    let updatevalue= countervalue[1]
    return (
        <div>
            <h1>Child Component</h1>
            <h2>change value using Props {props.num}</h2>
            <h2>Change value with useContext</h2>
            <h2>Counter value is {countervalue[0]}</h2>
            <button onClick={()=>{updatevalue(++countervalue[0])}}>Increment</button>
            <button onClick={()=>{updatevalue(0)}}>Reset to Zero</button>
        </div>
    );
}

export default Child;