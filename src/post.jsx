export default function Post({ post }) {
    console.log(post)
    const {body,id,title,userId}=post;
    return (
        <div className="cards">
            <h3>Title:{title}</h3>
            <h4>Body : {body}</h4>
            <h4>UserId : {userId}</h4>
            <h4>Id : {id}</h4>
        </div>
    )
}