// import React, { useState } from 'react';

// function Demo(props) {
//     let [count,setCount]=useState(0)
//     let sum=()=>{
//         let res=0;
//         for(let i=1;i<=10;i++)
//         {
//             res +=i
//         }
//         console.log(res)
//     }
//     return (
//         <div>
// {sum()}
// <h1>hello</h1>
// <h2>{count}</h2>
// <button onClick={()=>setCount(count+1),}>click</button>
            
//         </div>
//     );
// }

// export default Demo;





import React, { useMemo, useState } from 'react';

function Demo(props) {
    let [count,setCount]=useState(0)
    let sum=useMemo(()=>{
       console.log('re-render') 
       let res=0;
       for (let i=1;i<=10;i++)
       {
        res+=i;

       }
       return <h1>{res}</h1>;
    },[count])
    return (
        <>
        <div>
{sum}
<h1>hello</h1>
<h2>{count}</h2>      
<button onClick={()=>setCount(count+1)}>click</button>      
        </div>
        </>
    );
}

export default Demo;