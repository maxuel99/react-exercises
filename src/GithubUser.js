import { useGithubUser } from "./useGithubUser";

const GithubUser = ({ username }) => {
    const { data, loading, error } = useGithubUser(username)

    return ( 
        <div className="my-3">
            <h2 className="text-2xl font-bold underline mx-3 mb-2">Github Info</h2>
            <ul className="list-inside list-disc">
                {loading && <h4>Loading...</h4>}
                {error && <h4>There has been an error</h4>}
                {data && <li>{data.name} [name]</li>}
                {data && <li>{data.created_at} [created at]</li>}
                {data && <li>{data.bio} [bio]</li>}
            </ul>
        </div>
     );
}
 
export default GithubUser;