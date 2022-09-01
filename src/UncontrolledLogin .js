import React from "react";

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return(
            <div>
                <h1 className="underline mx-3 mb-2">Uncontrolled Login</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" className="ml-3 mt-3 mb-2 border border-black" placeholder="--username--" autoFocus />
                    <input name="password" type="password" className="ml-3 mt-3 mb-2 mr-2 border border-black" placeholder="--password--" />
                    <input name="remember" type="checkbox" className="mr-2"/>

                    <button type="submit" className="border border-black rounded mr-1 bg-lime-500 px-1">Login</button>
                    <button type="reset" className="border border-black rounded mr-1 bg-white px-1">Reset</button>
                </form>
            </div>
        )
    }
}