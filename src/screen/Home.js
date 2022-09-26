import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/Api/post/postApi";


function Home() {
    // dichiaro una variabile stato nel quale inserire i dati presi da axios
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // creo la funzione asincronà che chiamerà i dati
        async function getAll(){
            let response = await getPosts()
            console.log(response)
            setPosts(response.data)
        }
        // richiamo la funzione asincrona
        getAll()
    }, [])

    return (
        <div className="container-home">
            <h1>SHOW POST</h1>
            {
                posts.map((post) => {
                    return(
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>
                                {post.body}
                            </p>
                            <button className="btn-home">
                                <Link to={`post/${post.id}`}>Guarda</Link>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;