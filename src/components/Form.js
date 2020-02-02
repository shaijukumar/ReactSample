import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.InputRef = React.createRef()

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }

        this.InputRef = React.createRef()
    }

    componentDidMount() {
        this.InputRef.current.focus();

    }

    handelUserNameChange = (event) => {
        this.setState({

            userName: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }


    handleSubmit = event => {
        alert(`User name: ${this.state.userName},  ${this.state.comments} `)
        event.preventDefault()
    }

    render() {
        const { userName, comments, topic } = this.state
        return (
            < form onSubmit={this.handleSubmit} >
                <div>
                    <label>Username </label>
                    <input
                        ref={this.InputRef}
                        type='text'
                        value={userName}
                        onChange={this.handelUserNameChange}
                    />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>

                <button type="submit">Submit</button>

            </form >
        )
    }
}

export default Form 
