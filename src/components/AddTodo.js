import React, { Component } from 'react'
import './stl.css'

export class AddTodo extends Component {
    state = {
        todoTxt: ''
    }
    handleChange = (e) => {
        this.setState({
            todoTxt: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            todoTxt: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo:</label><br />
                    <input type="text" className={"inputT"} onChange={this.handleChange} value={this.state.todoTxt} />
                </form>
            </div>
        )
    }
}