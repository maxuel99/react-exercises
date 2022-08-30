import React from "react";

export class Colors extends React.Component {
    render() {

        return (
            <div>
                <h2>My Colors</h2>
                <ul>
                    {this.props.todos.map((todo) => (
                        <li key={todo.id}>{todo.name}</li>))}
                </ul>
            </div>
        )
    }
}