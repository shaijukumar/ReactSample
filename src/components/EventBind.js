import React, { Component } from 'react'

class EventBind extends Component {
    render() {
        return (
            <div>



                <div>
                    <button onClick={clickHandler} >Click</button>
                </div>

                <div>
                    <button onClick={clickHandler} >Click 1</button>
                </div>
            </div>
        )
    }
}

export default EventBind
