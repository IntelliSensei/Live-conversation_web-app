import { gql, useQuery } from "@apollo/client"
import { off } from "process";

interface IUser {
    email: string;
    alias: string;
}

export interface GraphqlResponse {
    users: IUser[];
}

export const ListAllUsers = () => {

    const { data, loading, error } = useQuery<GraphqlResponse>(gql`
        query Users {
            users {
                email
                alias       
            }
        }
    `)

    if (loading) {
        return <div>
            loading...
        </div>
    }

    if (error) {
        return <div>
            {error.message}
        </div>
    }

    // console.log(data)

    if (!data) {
        return <div>
            {data}
            hello world
        </div>
    }
    return <>
        {data.users.map((user) => <div>
            {user.email}
        </div>)}
    </>
}