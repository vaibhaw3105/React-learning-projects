import { useState } from "react"
import ButtonColor from "./Components/ButtonColor"


function App() {
  const [color, setColor] = useState("olive") 

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
       {/*
       ...... 1st way of making buttons .....
       
       <button
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
       style={{backgroundColor: "red"}}
       onClick={() => setColor("red")}
       >Red</button>
       <button
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
       style={{backgroundColor: "green"}}
       onClick={() => setColor("green")}
       >Green</button>
       <button
       className="outline-none px-4 py-1 rounded-full  text-gray-700 shadow-lg "
       style={{backgroundColor: "yellow"}}
       onClick={() => setColor("yellow")}
       >Yellow</button>
       <button
       className="outline-none px-4 py-1 rounded-full  text-gray-700 shadow-lg "
       style={{backgroundColor: "lavender"}}
       onClick={() => setColor("lavender")}
       >Lavender</button>
       <button
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
       style={{backgroundColor: "purple"}}
       onClick={() => setColor("purple")}
       >Purple</button>
       <button
       className="outline-none px-4 py-1 rounded-full text-gray-700 shadow-lg "
       style={{backgroundColor: "white"}}
       onClick={() => setColor("white")}
       >White</button>
       <button
       className="outline-none px-4 py-1 rounded-full  text-gray-700 shadow-lg "
       style={{backgroundColor: "pink"}}
       onClick={() => setColor("pink")}
       >Pink</button> */}

     {/* ..... 2nd way of Making buttons using functional components calling ..... */}

      <ButtonColor color="red" colorname = "Red"  textColor = "text-white"
      onClick={() => setColor("Red")}/>
      <ButtonColor color="white" colorname = "White" 
      onClick={() => setColor("white")}/>
      <ButtonColor color="green" colorname = "Green" textColor = "text-white "
      onClick={() => setColor("green")}/>
      <ButtonColor color="Yellow" colorname = "Yellow"
      onClick={() => setColor("yellow")}/>
       <ButtonColor color="pink" colorname = "Pink" textColor = "text-gray-800 "
      onClick={() => setColor("pink")}/>
       <ButtonColor color="purple" colorname = "Purple" textColor = "text-white "
      onClick={() => setColor("purple")}/>
       <ButtonColor color="lavender" colorname = "Lavender"
      onClick={() => setColor("lavender")}/>
       <ButtonColor color="aliceblue" colorname = "Aliceblue"
      onClick={() => setColor("aliceblue")}/>

      </div>
    </div>
   </div>
  )
}

export default App
