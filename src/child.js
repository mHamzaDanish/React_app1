import React, { useContext } from 'react';
import counterContext from './context/countercontext';

const Child=(props)=>{

    let countervalue = useContext(counterContext)
    let updatevalue= countervalue[1]
    return (
        <div>
            <h3>Child Component</h3>
            <h3>Change value using Props {props.num}</h3>
            <h3>Change value with useContext</h3>
            <h1>Counter {countervalue[0]}</h1>
            <button className="btn" onClick={()=>{updatevalue(++countervalue[0])}}>Increment</button>
            <button className="btn" onClick={()=>{updatevalue(0)}}>Reset to Zero</button>
        </div>
    );
}

export default Child;