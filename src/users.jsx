import { use} from "react"
export default function Users({fetchUsers}){
    const users = use(fetchUsers)
    // console.log(fetchUsers)
    // console.log(users)
    return (
        <div className="cards">
            <h3>Users: {users.length}</h3>
        </div>
    )
}