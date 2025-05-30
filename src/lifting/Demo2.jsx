import React from 'react';

function Demo2 ({count,incr,decr})  {
    return (
        <div>
            <h1>Demo component 2</h1>
            <h1>{count}</h1>
            <button onClick={incr}>incr</button>
             <button onClick={decr}>decr</button>
            
        </div>
    );
}

export default Demo2;