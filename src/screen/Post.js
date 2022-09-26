import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getPostComments } from "../services/Api/post/postApi";

function Post() {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    let params = useParams();

    useEffect(() => {
        // chiamo il post passando il parametro 
        async function get() {
            const post = await getPost(params.id)
            const comments = await getPostComments(params.id)
            setPost(post.data)
            setComments(comments.data)
            // console.log(post.data)
            // console.log(comments.data)
        }
        get()
        // console.log(params.id)
        // console.log(comments)
    }, [])

    return (

        <div id="post">
            {
                <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            }
            <div className="comment">
                {
                    comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <h5>
                                    user: {comment.name} | {comment.email}
                                </h5>
                                <p>
                                    {comment.body}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Post;