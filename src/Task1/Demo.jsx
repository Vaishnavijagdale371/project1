import React, { useState } from 'react';

function Demo(props) {

    let [Name, setName] = useState('')
    let [Age, setAge] = useState('')
    let [City, setCity] = useState('')





    function Save() {
        let new_stud = {
            Name, Age, City
        }
        localStorage.setItem('new_stud', JSON.stringify(new_stud))
        Read();


    }
    function update() {

        document.getElementById("txt_Name").value
        document.getElementById("txt_Age").value 
        document.getElementById("txt_City").value
        Read(); 
    }

    function clear() {

        document.getElementById("txt_Name").value = ''
        document.getElementById("txt_Age").value = ''
        document.getElementById("txt_City").value = ''
        Read();
        


        function Read()

        {
            let new_stud=localStorage.getItem('stud')
            let stud=new_stud ? JSON.parse(new_stud):[]
            let row =``;
            stud.forEach((s,index)=>{
                console.log(s)
                row +=``;
        <tr>
            <td>${index+1}</td>
             <td>${s.Name}</td>
             <td>${s.Age}</td>
             <td>${s.City}</td>
        </tr>
                

            })

            

        }


    }
    return (
        <div>
            <h1>Form</h1>

            Name: <input type="text" id='txt_Name' onChange={(e) =>
                setName(e.target.value)
            } />
            <br /><br />
            Age: <input type="text" id='txt_Age' onChange={(e) =>
                setAge(e.target.value)
            } />
            <br /><br />
            City:<input type="text" id='txt_City' onChange={(e) =>
                setCity(e.target.value)
            } />
            <br /><br />
            <button onClick={Save} >Save</button>
            <button style={{margin:15}} onClick={update}>update</button>
            <button style={{ margin: 15 }} onClick={clear}>clear</button>
            
            <h1>Table</h1>
            <table border={1} style={{width:'90%'}}>
                <tbody>
                <tr>
                    <th>sr.no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </tbody>
            </table>




        </div>
    );

}
export default Demo;