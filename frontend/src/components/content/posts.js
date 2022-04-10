import react, {useState, useEffect} from 'react'
import Post from "./post";

export default function Posts() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        submit()
    }, []);


    const submit = async() => {
        fetch("http://localhost:5555/getPost.php")
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setPosts(data)
            })
            .catch(error => {
                setPosts({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            })
    }

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <h1>Tout les posts :</h1>
            {posts ? posts.map((post, i) => {
                return <Post key={i} post={post} i={i}/>
            }) : ''}
        </div>
    )
}
