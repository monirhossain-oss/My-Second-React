import { use } from "react"
import Post from "./post";

export default function Posts ({postsPromised}){
    const posts = use(postsPromised);
    // console.log(postsPromised)
    return(
        <div className="cards">
            <h3>All Posts Heres: {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post = {post}></Post>)
            }
        </div>
    )
}