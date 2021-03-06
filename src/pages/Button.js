import React from 'react';
import  { useState } from "react";

function Button(){
  let value=''

  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

 


   const clear = ()=> {
    setInput(input.substr(0, input.length-1 ))

   }

   const Ac = ()=> {
    setInput("")
   }

   const add =(e) => {
       setInput(input + e.target.value)
       
   }

   const sub=(e) =>{
    setInput(input + e.target.value)
    

   }

   const mul=(e) =>{
    setInput(input + e.target.value)
    

   }

   const div =(e) =>{
    setInput(input + e.target.value)
    

   }
   return(
     <>

<div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={clear}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={Ac } value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={add} value="+" >
          +
        </button>

        {/* minus btn */}
        <button onClick={sub} value="-" >
          {" "}
          -{" "}
        </button>

        <button onClick={mul} value="*" >
          {" "}
          *
        </button>

        <button onClick={div} value="/" > 
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
    </>
  );
};
export default Button;