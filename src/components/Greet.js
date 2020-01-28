import React from 'react'
const Greet = (props) => {

    const { name, age } = props
    return (
        <div>
            <h1> Welcome1 {name}, age: {age} </h1>
        </div>
    )
}
export default Greet