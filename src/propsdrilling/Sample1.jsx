import React from 'react';

import Sample2 from './Sample2';

function Sample1(props) {
    let stud={
name:"sarthak",
age:10,
city:"vaijapur"

    }
   
    return (
        <>
    {/* <myContext.provider.value={stud}> */}
        <div style={{border:'2px solid black',padding:'12px',background:'skyblue'}}>
            <h1>Sample1 </h1>
            {stud.name}
           
            <Sample2/>
        </div>
        {/* </myContext.provider>    */}


        </>
    );
}

export default Sample1;