// import React, { useState } from 'react';

// const Demo = (props) => {
//     let[count,setCount]=useState(0)
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>{setCount(count+1)}} >increment</button>
//             <button onClick={()=>(setCount(count-1))}>decrement</button>
//         </div>
//     );
// };

// export default Demo;

// import React from 'react';

// function Demo(props) {
//     let handleInput=(e)=>{
//         console.log(e.target.value)

//     }
//     return (
//         <div>
//             enter name:
//             <input type="text" name="txt_name" placeholder='enter name' id=''onChange={handleInput} />


//         </div>
//     );
// }

// export default Demo;


import React from 'react';

function Demo(props) {
    let handleInput = (e) => {
        console.log(e.target.value)

    }
    return (
        <div>


            enter name:
            <input type="text" name="txt_name" placeholder='enter name' id='' onChange={handleInput} />   <br/> <br/>
            select city:<select name="sel_city" id="" onChange={handleInput}>
                <option value="vaijapur">vaijapur</option>
                <option value="shirdi">shirdi</option>
                <option value="gangapur">gangapur</option>
            </select>

        </div>
    );
}

export default Demo;

