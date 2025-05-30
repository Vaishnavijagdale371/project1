import React, { useContext } from 'react';
import { myContext } from './Sample1';

function Sample3(props) {
    let stud=useContext(myContext)

    
    return (
        <>
        <div style={{border:"2px solid black",padding:"15px",background:"pink"}}>
            <h1>Sample3</h1>
            {stud.Name}-{stud.Age}-{stud.City}
        </div>
        </>
    );
}

export default Sample3;