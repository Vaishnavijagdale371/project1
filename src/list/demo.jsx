import React from 'react';

function Demo() {
    let students = [
        { name: "vaishnavi", age: 20 },
        { name: "poonam", age: 16 },
        { name: "tanuja", age: 13 }

    ]
    return (
        <div>
            <h1>list rendring & keys</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>srno</th><th>name</th><th>age</th>
                    </tr>


                </thead>
                {
                    students.map((s, index) => {
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <th>{s.name}</th>
                                <th>{s.age}</th>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
}

export default Demo;