import React, { useEffect, useState } from 'react';

function Demo(props) {
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("component create/mount")
        return()=>{
            console.log("component remove/unmount")
        }
    },[])

    useEffect(()=>{
        console.log("component undate/change")
    },[count])
    return (
        <div>
           <h1>component life cycle</h1> 
           <button onClick={()=>{setCount(count+1)}}>increment</button>
        </div>
    );
}

export default Demo