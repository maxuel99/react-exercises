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
                <input name="username" type="text" value={this.state.username} className="mx-3 mt-3 mb-2 mr-4 border border-black" placeholder="--name--" onChange={this.handleInputChange}/>
            </div>
        )
    }
}