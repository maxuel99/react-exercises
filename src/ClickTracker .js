import React from "react";
import { Button } from 'react-bootstrap';

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
            <div className="mx-3 mt-2">
                <Button className="border mr-1" name="my-btn" onClick={this.handleButton} >Primo</Button>
                <Button variant="secondary" className="border mr-1" name="my-btn-2" onClick={this.handleButton} >Secondo</Button>
                <Button variant="success" className="border" name="my-btn-3" onClick={this.handleButton} >Terzo</Button>
                <h1>{this.state.track}</h1>
            </div>
        )
    }
}