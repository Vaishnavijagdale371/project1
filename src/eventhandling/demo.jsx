import React from 'react';

let  Demo =()=>{
 function show(name)
 {
    alert(name)
 }
    
    return (
        <div>
            <h1>demo component</h1>
            <button onClick={()=>{show('aarush')}}>click</button>
            
        </div>
    );
}

export default Demo;