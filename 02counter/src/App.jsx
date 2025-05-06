/**
 * this project is about increasing the count value upto 20 and decreaing it    minimum upto 0..... 
 */

import {useState} from 'react'
import './App.css'

function App() {

  /*
  🔹 What is a Hook in React?
A Hook is a special function in React that lets you use React features (like state and lifecycle methods) inside functional components.

🔹 Why Hooks?
Before Hooks, only class components could use features like state and lifecycle methods.
Hooks allow functional components to be powerful and stateful — making code simpler and cleaner
*/ 

/*
🔹 What is useState?
useState is a hook in React that lets you add state to a functional component.

Before hooks, only class components could have state. Now with useState, functional components can store and update data that changes over time — like form inputs, counters, toggle switches, etc.

🔹 How does it work?
When you call useState, it returns two things:

1. The current value of the state.

2. A function to update that value.

 const [count, setCount] = useState(0); // 0 is the initial value

🔹 Explanation in simple words:

i. count is a variable that holds a number.

ii. setCount is a function that changes the value of count.

iii. When setCount is called, React re-renders    the component with the new count.



*/ 
  
 let [counter, setCounter] = useState(15); 
 const addValue = () =>{
   if(counter>=20)  setCounter(20);
   else setCounter(counter+1);
 }
 const removeValue = () =>{
  if(counter<=0)  setCounter(0);
  else setCounter(counter-1);
}

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

export default App
