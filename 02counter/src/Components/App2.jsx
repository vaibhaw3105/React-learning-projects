/**
 * this project is about learning use of more than 1 setCounter...
 */

import {useState} from 'react'


function App2() {
  
 let [counter, setCounter] = useState(15); 
 const addValue = () =>{
   /*
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);

      ❗ Even though setCounter is called 4 times, the counter only increases by 1.
      🔍 This is because React batches multiple state updates for performance,
          and if they depend on the same `counter` value, they all use the old value.

      ✅ To fix this, use the functional form of setState:
    */
    
      setCounter(prev => prev + 1);
      setCounter(prev => prev + 1);
      setCounter(prev => prev + 1);
      setCounter(prev => prev + 1);
   
 }
 
 const removeValue = () => {
    setCounter(prev => prev - 1);
    setCounter(prev => prev - 1);
    setCounter(prev => prev - 1);
  };

  /**
   * 🔁 Alternatively, reduce repetition (optional):
   * 
   * const removeValue = () => {
  for (let i = 0; i < 3; i++) {
    setCounter(prev => prev - 1);
  }
};

   */
  

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter: {counter}</h2>
     <button
     onClick = {addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick = {removeValue}>Remove Value {counter}</button>
     <footer>Footer : {counter}</footer>
    </>
  )
}

export default App2
