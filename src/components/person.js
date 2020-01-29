import React from 'react'

function person({ person }) {
    return (
        <tr>
            <td> {person.name}</td>
            <td> {person.age}</td>
            <td> {person.skill}</td>
        </tr>
    )
}

export default person
