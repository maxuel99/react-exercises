import React from "react";

export class CLickTracker extends React.Component {
    state = {
        track: ''
    }

    handleButton = (event) => {
        console.log(event.target.innerText)
        this.setState(() => {
            return {
                track: event.target.innerText
            }
        })
    }
    
    render() {
        return (
            <div>
                <button name="my-btn" onClick={this.handleButton} >Primo</button>
                <button name="my-btn-2" onClick={this.handleButton} >Secondo</button>
                <button name="my-btn-3" onClick={this.handleButton} >Terzo</button>
                <h1>{this.state.track}</h1>
            </div>
        )
    }
}