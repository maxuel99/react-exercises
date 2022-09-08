import { useGithubUser } from "./useGithubUser";

const GithubUser = ({username}) => {
    const { users, error, isLoading, onFetchUser } = useGithubUser(username)

    const handleClick = () => onFetchUser()

    return ( 
        <div className="my-3">
            <h2 className="text-2xl font-bold underline mx-3 mb-2">Github Info</h2>
            <ul className="list-inside list-disc">
                {isLoading && <h4>Loading...</h4>}
                {error && <h4>There has been an error</h4>}
                {users && <div>
                    <h4>{users.name}</h4>
                    <button className="border border-black rounded mr-1 bg-white px-1" onClick={handleClick}>Refresh</button>
                </div>}
            </ul>
        </div>
     );
}
 
export default GithubUser;