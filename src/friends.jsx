import { use } from "react"

export default function Firends ({friendsPromised}){
    const friends = use(friendsPromised);
    return(
        <div className="cards">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}