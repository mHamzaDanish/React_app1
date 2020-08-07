import React, { useReducer, useState } from 'react';
import number_reducer from './context/numberreducer';

const Child2 = ()=>{
    let [increment_val,set_inc]=useState(10);
    let [decrement_val,set_dec]=useState(10);
    let [state,dispact]=useReducer(number_reducer,52)

    
    return(
        <div>
            <h3>Use of Reducer</h3>
             <h1>Counter {state}</h1>
            <h2>Increment The value With</h2>
            <input type="number" id="increment_value"></input>
            <button className="btn" onClick={()=>{ set_inc( parseInt(document.getElementById("increment_value").value))}}>Set Increment Value Default is 10</button>

            <h2>Decrement The value With</h2>
            <input type="number" id="decrement_value"></input>
            <button className="btn"onClick={()=>{ set_dec( parseInt(document.getElementById("decrement_value").value))}}>Set Decrement Value Default is 10</button>
            
            <br></br>
            <br></br>
            <button className="btn" onClick={()=>{dispact({type:"increment" ,val:increment_val})}}>Increment The Value</button>
            <button className="btn" onClick={()=>{dispact({type:"decrement",val:decrement_val})}}>Decrement The Value</button>
            <br></br>
            
        </div>
    );
}

export default Child2;