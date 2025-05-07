import React from 'react'

function ButtonColor({color,colorname,onClick,textColor}) {
  return (
    <button
    // className="outline-none px-4 py-1 rounded-full  shadow-lg"
       className={`outline-none px-4 py-1 rounded-full ${textColor} shadow-lg`}
       style={{backgroundColor: color}}
    
       onClick={onClick}
       >{colorname}</button>
  )
}

export default ButtonColor

// style={{
//     backgroundColor: color,
//     color: textColor,
//   }}

// this won't work for textColor bcz
// style={{ color: "text-white" }} → ❌ invalid
// style={{ color: "white" }} → ✅ valid

// className={`outline-none px-4 py-1 rounded-full ${textColor} shadow-lg`}

// this works for textColor bcz passed inside tailwind inside template literals `S{textColor}`


// --------------------------------------


/**
 The onClick() method in React is a special prop used to handle click events on elements
—most commonly buttons
but it works on almost any clickable element (<div>, <span>, etc.).



** onClick() method takes 

🔍 What Actually Happens
onClick={...} expects a function reference, not a function call.

This is not correct: onClick={handleClick()} ❌
It runs the function immediately.

This is correct: onClick={handleClick} ✅
Or use arrow functions for passing arguments: onClick={() => handleClick(arg)}


** 🧠 What You Can Do Inside onClick
* Trigger state updates

* Call APIs

* Toggle UI components

* Log data

*  Navigate routes (e.g., using useNavigate from  React Router)

*/