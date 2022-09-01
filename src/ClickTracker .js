import React from "react";

export class CLickTracker extends React.Component {
    state = {
        track: ''
    }

    handleButton = (event) => {
<<<<<<< HEAD
        console.log(event.target.innerText)
        this.setState(() => {
            return {
                track: event.target.innerText
=======
        console.log(event.target.alt)
        this.setState(() => {
            return {
                track: event.target.alt
>>>>>>> forms-01
            }
        })
    }
    
    render() {
        return (
<<<<<<< HEAD
            <div>
                <button name="my-btn" onClick={this.handleButton} >Primo</button>
                <button name="my-btn-2" onClick={this.handleButton} >Secondo</button>
                <button name="my-btn-3" onClick={this.handleButton} >Terzo</button>
=======
            <div onClick={this.handleButton}>
                <button name="btn-1" onClick={this.handleButton}><img src="https://cdn-icons-png.flaticon.com/512/7645/7645064.png" alt="battery"  width={'50px'}/></button>
                <button name="btn-2" onClick={this.handleButton}><img src="https://cdn-icons-png.flaticon.com/512/7645/7645252.png" alt="camera"  width={'50px'}/></button>
                <button name="btn-3" onClick={this.handleButton}><img src="https://cdn-icons-png.flaticon.com/512/7645/7645255.png" alt="no-flash"  width={'50px'}/></button>
>>>>>>> forms-01
                <h1>{this.state.track}</h1>
            </div>
        )
    }
}