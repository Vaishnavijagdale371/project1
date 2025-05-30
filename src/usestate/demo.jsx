import React, { useState } from 'react';

function Demo(props) {

let [Name,setName]=useState('')
let [Age,setAge]=useState('')
let [City,setCity]=useState('')





    function Save()
    {
        let new_stud={
            Name,Age,City
        }
        localStorage.setItem('student',JSON.stringify(new_stud))
    }
    return (
        <div>
            
            
           Name: <input type="text" onChange={(e) =>
                setName(e.target.value)
            } />
            <br /><br />
             Age: <input type="text" onChange={(e)=>
                setName(e.target.value)
            } />
            <br /><br />
              City:<input type="text" onChange={(e)=>
                setName(e.target.value)
            } />
            <br /><br />
            <button onClick={Save}>Save</button>

            

        </div>
    );
}

export default Demo;