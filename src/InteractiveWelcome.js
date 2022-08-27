import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: '',
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({
            username: value,
        })
    }


    render() {
        return (
            <div>
                <h1>
                    <Welcome name={this.state.username}/>
                </h1>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
            </div>
        )
    }
}