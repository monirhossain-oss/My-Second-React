export default function Friend({friend}){
    console.log(friend)
    const {name,email,phone,username,website}=friend;
    console.log(friend)
    return(
        <div className="cards">
            <h4>Friend: {name}</h4>
            <p>Email : {email}</p>
            <p>Phone: {phone}</p>
            <p>UserName: {username}</p>
            <p>Website: {website}</p>
        </div>
    )
}