import React from "react";
import { Button } from 'react-bootstrap';

export class CLickTracker extends React.Component {
    state = {
        track: ''
    }

    handleButton = (event) => {
        console.log(event.target.alt)
        this.setState(() => {
            return {
                track: event.target.alt
            }
        })
    }
    
    render() {
        return (
            <div className="mx-3 mt-2" onClick={this.handleButton}>
                <Button className="border mr-1" name="my-btn" onClick={this.handleButton} >
                    <img src="https://cdn-icons-png.flaticon.com/512/7645/7645064.png" alt="battery"  width={'50px'}/>
                </Button>
                <Button variant="secondary" className="border mr-1" name="my-btn-2" onClick={this.handleButton} >
                    <img src="https://cdn-icons-png.flaticon.com/512/7645/7645252.png" alt="camera"  width={'50px'}/>
                </Button>
                <Button variant="success" className="border" name="my-btn-3" onClick={this.handleButton} >
                    <img src="https://cdn-icons-png.flaticon.com/512/7645/7645255.png" alt="no-flash"  width={'50px'}/>
                </Button>
                <h1>{this.state.track}</h1>
            </div>
        )
    }
}