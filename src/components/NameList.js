import React from 'react'
import Person from './person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']


    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    const nameList = names.map((name, index) => <h2 key={index}>{index}. {name}</h2>)

    //const personsList = persons.map(person => <h2>Name : {person.name}, age: {person.age}, skill: {person.skill} </h2>)
    const personsList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {nameList}
            <hr />
            <table border="1">
                <thead>
                    <tr>
                        <td> Name</td>
                        <td>Age</td>
                        <td>Skill</td>
                    </tr>
                </thead>
                <tbody>
                    {personsList}
                </tbody>

            </table>
        </div>
    )
}

export default NameList
