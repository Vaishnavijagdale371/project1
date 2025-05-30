import React, { useState } from 'react';
import Demo2 from './Demo2';

function Demo(props) {
    let [count, setCount] = useState(0)
    function incr()
    {
        setCount(count + 1)
    }

    function decr() 
    {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>demo component 1</h1>
            <h1>{count}</h1>
            <button onClick={incr} >increment</button>
            <button onClick={decr}>decrement</button>
            < Demo2 count={count} incr={incr} decr={decr} />

        </div>
    );
}

export default Demo;