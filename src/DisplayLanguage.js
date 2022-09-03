import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    state = {
        language: "en"
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
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                </select>
            </div>
        )
    }
}