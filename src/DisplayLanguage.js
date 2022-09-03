import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    state = {
        language: ""
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div className="ml-4">
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="">--select-lang--</option>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                </select>
                <LanguageContext.Consumer>
                    { () => {
                        return (
                            <h1>{this.state.language}</h1>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}