import React from "react";
import { useState } from "react";

// export class Login extends React.Component {
//     state = {
//         username: '',
//         password: '',
//         remember: false,
//     }

//     handleInputChange = (event) => {
//         const value = event.target.value
//         const name = event.target.name
//         const type = event.target.type
//         const checked = event.target.checked

//         this.setState({
//             [name]: type === "checkbox" ? checked : value,
//         })
//     }

//     onLogin = () => {
//         console.log(this.state)
//     }


//     handleResetState = () => {
//         this.setState({
//             username: '',
//             password: '',
//             remember: false,
//         })
//     }

//     render() {
//         const LoginButtonStyle = {
//             backgroundColor: this.state.password.length < 8 ? 'red' : 'green',
//             color: 'black',
//         }
//         return (
//             <div>
//                 <h1 className="underline mx-3 mb-2">My Login</h1>

//                 <div>
//                     <input name="username" type="text" value={this.state.username} className="ml-3 mt-3 mb-2 border border-black" placeholder="--username--" onChange={this.handleInputChange}/>
//                     <input name="password" type="password" value={this.state.password} className="ml-3 mr-2 mt-3 mb-2 border border-black" placeholder="--password--" onChange={this.handleInputChange}/>
//                     <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/>
//                 </div>

//                 <div>
//                     <button name="login" disabled={!this.state.username} style={LoginButtonStyle} className="border border-black rounded mr-1 ml-3 px-1" onClick={this.onLogin}>Login</button>
//                     <button className="border border-black rounded bg-white px-1" onClick={this.handleResetState}>Reset</button>
//                 </div>
//             </div>
//         )
//     }
// }

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '', 
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin() {
        console.log(data)
    }

    function handleResetState() {
        setData({
            username: '',
            password: '',
            remember: false
        })
    }

    const LoginButtonStyle = {
        backgroundColor: data.password.length < 8 ? 'red' : 'green',
        color: 'black',
    }

    return (
        <div>
            <h1 className="underline mx-3 mb-2">My Login</h1>
        
            <div>
                <input name="username" type="text" value={data.username} className="ml-3 mt-3 mb-2 border border-black" placeholder="--username--" onChange={handleInputChange}/>
                <input name="password" type="password" value={data.password} className="ml-3 mr-2 mt-3 mb-2 border border-black" placeholder="--password--" onChange={handleInputChange}/>
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>
            </div>
        
            <div>
                <button name="login" disabled={!data.username || !data.password} style={LoginButtonStyle} className="border border-black rounded mr-1 ml-3 px-1" onClick={onLogin}>Login</button>
                <button className="border border-black rounded bg-white px-1" onClick={handleResetState}>Reset</button>
            </div>
        </div>      
    )
}