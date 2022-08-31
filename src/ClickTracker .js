import React from "react";

export class CLickTracker extends React.Component {
    handleButton = (event) => {
        console.log(event.timeStamp)
    }
    
    render() {
        return (
            <div onClick={this.handleButton} className="mx-3 mt-2">
                <button><img src="https://cdn-icons-png.flaticon.com/512/7645/7645064.png" alt=""  width={'50px'}/></button>
                <button><img src="https://cdn-icons-png.flaticon.com/512/7645/7645252.png" alt=""  width={'50px'}/></button>
                <button><img src="https://cdn-icons-png.flaticon.com/512/7645/7645255.png" alt=""  width={'50px'}/></button>
            </div>
        )
    }
}