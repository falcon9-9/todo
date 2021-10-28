import React, { Component } from 'react'

class TodoCounter extends Component {
    render() {
        let todos = this.props.todos
        let total = todos.length
        let completeLength = todos.filter(e => e.done).length
        let uncompleteLength = todos.filter(e => !e.done).length
        return (
            <div className="todo-counter">
                <p>count</p>
                <div className="todo-table">
                    <div className="todo-row">
                        <span className="cell">all</span>
                        <span className="cell">completed</span>
                        <span className="cell">uncompleted</span>
                    </div>
                    <div className="todo-row">
                        <span className="cell">{total}</span>
                        <span className="cell">{completeLength}</span>
                        <span className="cell">{uncompleteLength}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoCounter
