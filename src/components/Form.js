import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: ''
        }
    }

    handelUserNameChange = (event) => {
        this.setState({

            userName: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username </label>
                    <input type='text' value={this.state.userName} onChange={this.handelUserNameChange} />
                </div>
            </form>
        )
    }
}

export default Form 
