import React,{useState} from 'react';
import Parent from './parent'
import counterContext from './countercontext';


function App() {
  //let [number,setnumber]= useState(45); 
  let value = useState(45);

  return (
    
    <counterContext.Provider value={value}>
      <Parent num="14"/>
    </counterContext.Provider> );
      //<button onClick={()=>{ setnumber(++vakue)}}>Change Number</button>
      //<button onClick={()=>{ setnumber(45)}}>Reset Number</button>
    

}

export default App;
