import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
   

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // Think of memoization as caching a value so that it does not need to be recalculated.
  // The useCallback Hook only runs when one of its dependencies update.
  //useCallBack optimizes and keep in memory cache

  //kisi bhi chiz ka reference lena hota hai toh <-- useRef --> is used
  /** 
   *  *useRef Hook */

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
         let pass = "";
         let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

         if(numberAllowed) str += "0123456789"
         if(charAllowed)  str += "~`!@#$%^&*()-_[]{}"

         for(let i=1;i<=length;i++){
          let char = Math.floor(Math.random()*str.length + 1)
          pass += str.charAt(char)
         }
        setPassword(pass)  

  },
[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},
[length,setNumberAllowed,setCharAllowed,passwordGenerator])


/**
 * The useEffect() hook in React lets you run side effects in your components — things that happen after rendering, like:

Fetching data

Updating the DOM

Setting up event listeners

Syncing state with local storage


 ** 🔹 Basic Syntax

useEffect(() => {
  // Your side effect here
}, [dependencies]);

🔍 Parts of useEffect
Part	What it Does
* () => {}	A function with the code you want to run

* [deps]	A list of variables that "trigger" the effect
 * 
 * ✅ Tip: Always watch the dependency array ([])
Empty array → run once

No array → run after every render

[stateVar] → run only when that variable changes


 * 
 * */ 

// passwordGenerator() it cannot be called this way

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-800 text-orange-500 '>
      <h1 className='text-white text-center  text-lg font-semibold my-3 py-2'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden bg-white mb-6'>

        <input
        type='text'
        value={password}
        className='outline-none w-full py-2 px-3 text-gray-800'
        placeholder='Password'
        readOnly
        ref={passwordRef}
       />

       <button
       style={{cursor: 'pointer'}}
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       >
        Copy</button>

       </div>

       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          /**
         ✅ defaultChecked — In Simple Words:
defaultChecked sets the starting (initial) checked state of a checkbox only once when the page first loads.

After that, React does not control it — it's like saying, "Be checked by default, but I won’t manage you after that."
         */
          defaultChecked={numberAllowed}
          /*
              If numberAllowed is true, the checkbox starts checked.
              Otherwise, not checked

              but here, 
              */ 
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev); 
              // prev value is flipped i.e true-> false and vice versa
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
                  // prev value is flipped i.e true-> false and vice versa
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>


       {/* 👇 Add something here to see the margin */}

       {/* <<<<<-------------------         --------------->>>>>>>>>>>>>>>> */}

       {/* 1st Approach to call passwordGenerator function */}

       {/* <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
       style={{cursor: 'pointer'}}
       onClick={passwordGenerator}>
        Generate Password
      </button> */}
     </div>
    </>
  )
}

export default App



/**
 * *The onChange()
 *  function in React is an event handler used to respond to changes in input fields (like text inputs, checkboxes, selects, etc.). It’s commonly used to update component state as the user types or interacts with a form element.
 * 
 * 
 * import { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
    />
  );
}

*
*📌 How it Works:
value={text}: Binds the input to the text state.

onChange={(e) => setText(e.target.value)}: Updates the state every time the input changes.

🔸 Tip:
Always bind inputs using value or checked + onChange together to ensure it's a controlled component.

** The useCallback() hook in React is used to memoize a function — meaning it will return the same function instance between re-renders unless its dependencies change.

🔸 Why Use useCallback()?
✅ Prevents unnecessary re-creation of functions on re-renders.

✅ Improves performance when passing functions to child components (especially if they're memoized with React.memo).

✅ Useful in dependency arrays (e.g. in useEffect).

 * */ 