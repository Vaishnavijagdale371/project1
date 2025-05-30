// import React, { useMemo, useState } from 'react';

// function Demo(props) {
//     let[Count,setCount]=useState(0)
//     function show=useMemo(()=>{

//     })
// function show()
//     {
//         console.log('re-render')
//         return(
//             <h1>Hello world</h1>
//         )
//     }
//     return (
//         <div>
//             <h1>{Count}</h1>
//            {show()}
//            <button onClick={()=> setCount(Count+1)}>click</button>
//         </div>
//     );
// }

// export default Demo;



 import React, { useMemo, useState } from 'react';
 function Demo(props) {     let [Count,setCount]=useState(0)
     let  Show = useMemo(()=>{
         console.log('re-render')
         console.log('useMemo function memoized this show')
        let a=100+200
        return a

    },[])


    return (
        <div>
            <h1>{Count}</h1>

            <button onClick={()=> setCount(Count+1)}>click</button>
            <h3>computed value:{Show}</h3>
         </div>     );
}

 export default Demo;




// 





// import React, { useCallback, useMemo, useState } from 'react';




//     let Show = React.memo(() => {
//         console.log('re-render')
//         console.log('React.Memo function memoized this show')
//         return (
//             <h1>Hello world</h1>
//         )

//     })
//     function Demo() {
//         let [Count, setCount] = useState(0)



//         return (
//             <div>

//                 <h1>{Count}</h1>
//                 <h1>React Memo</h1>

//                 <button onClick={() => setCount(Count + 1)}>click</button>
//                 <Show />
//             </div>
//         );
//     }


//     export default Demo;