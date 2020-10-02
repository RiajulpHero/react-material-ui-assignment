import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect( ()=>{
        const postUrl = 'https://jsonplaceholder.typicode.com/posts';
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
  return (
    <div>
     {
         posts.map(post => <Post post={post}></Post>)
     }
    </div>
  );
};

export default Home;
