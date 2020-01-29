import React, { Component } from 'react'

export class UserGreetings extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        if (this.state.isLoggedIn)
            return (
                <div>
                    <div>Welcome Tom</div>
                    <div>Welcome Guest</div>
                </div>
            )
    }
}

export default UserGreetings
