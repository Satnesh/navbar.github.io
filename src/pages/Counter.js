import React from 'react'
import {useState} from 'react'


function Counter() {
    const[count,setcount]=useState(0)

    const Inc=()=>{
        setcount(count +1)
    }

    const Dec=()=>{
        setcount(count -1)
    }


    
    return (
         <div classname="products"> 
            <h1 >{count}</h1>
            <button onClick={Inc}>Increment</button>
            <button disabled={count===0} onClick={Dec}>Decrement</button>
        </div>
    )
}

export default Counter
