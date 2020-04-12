import React from "react";
import {AddTodo} from "./AddTodo";
import './stl.css'

export class List extends React.Component {

    state = {
        todos: [
            {id: 1, todoTxt: 'buy some milk'},
            {id: 2, todoTxt: 'play mario kart'}
        ],
        cout: 3
    }

    deleteTodo = (id) => {
        const td = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos: td
        });
    }

    addTodo = (todo) => {
        todo.id = this.state.cout;
        this.setState({cout: this.state.cout + 1})
        let td = [...this.state.todos, todo];
        this.setState({
            todos: td
        });
    }

    render() {
        return (<div className={"wrapList"}><AddTodo addTodo={this.addTodo} />
            {
                this.state.todos.map(item => {
                return <div key={item.id} className={"item"}>
                    <h1>{item.id} {item.todoTxt}</h1>
                    <button onClick={() => this.deleteTodo(item.id)}>
                        Hotovo
                    </button>
                </div>
            })}
        </div>);
    }
}

