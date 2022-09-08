import { useGithubUser } from "./useGithubUser";

const GithubUser = ({username}) => {
    const { users, error, isLoading } = useGithubUser(username)

    return ( 
        <div className="my-3">
            <h2 className="text-2xl font-bold underline mx-3 mb-2">Github Info</h2>
            <ul className="list-inside list-disc">
                {isLoading && <h4>Loading...</h4>}
                {error && <h4>There has been an error</h4>}
                {users && <h4>{users.name}</h4>}
            </ul>
        </div>
     );
}
 
export default GithubUser;