import React from 'react';
import Child from './child';
import Child2 from './Child2';

const Parent=(props)=>{
    return(
        <div>
        Parent
        <Child num={props.num}/>
        <Child2/>
        </div>
    
    )
}

export default Parent;