import { use } from "react"
import Friend from "./friend";

export default function Firends({ friendsPromised }) {
    const friends = use(friendsPromised);
    return (
        <div className="cards">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}