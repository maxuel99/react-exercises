import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {

    const [usernames, setUsernames] = useState('')
    const [usernameslist, setUsernameslist] = useState([])

    const handleChange = (event) => {
        setUsernames(event.target.value)
    }

    const addUsername = (e) => {
        e.preventDefault()
        if(usernames !== '') {
            const itemDetails = {
                id: Math.random().toString(),
                value: usernames,
            }

            setUsernameslist([...usernameslist, itemDetails]);
        }
        setUsernames('');
    }

    // console.log('itemlist', itemlist);

    return ( 
        <div>
            <form onSubmit={addUsername}>
                <h2 className="text-2xl font-bold underline mx-3 mb-2">Ricerca Username</h2>
                <input name="todo" type="text" value={usernames} className="mx-3 mt-2 mb-3 border border-black" onChange={handleChange} placeholder="--Add-username--" />
                <br />
                <button type="submit" className="border border-black rounded ml-4 mr-1 mb-3 bg-lime-500 px-1">Add</button>
                {usernameslist !== [] ?
                <ul>
                    {usernameslist.map((username ,index) => 
                        <GithubUser key={index} username={username.value}/>    
                    )}
                </ul>
                : null}
            </form>
        </div>
     );
}
 
export default GithubUserList;