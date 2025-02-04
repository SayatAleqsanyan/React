import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getPosts = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/photos'
        )
        return response.data
    } catch (error) {
        console.log(error.message)
        return []
    }
}

const Posts = () => {
    const [posts, setPosts] = useState([])
    posts.length = 100

    const fetchPosts = async () => {
        const filteredPosts = await getPosts()
        setPosts(filteredPosts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="flex flex-col pl-[100px] ">
            {posts.map((post) => (
                <ul key={post.id} className="p-5">
                    <li className="font-bold">Post No: {post.id}</li>
                    <li className="font-bold">Post title: {post.title}</li>
                    <li className="font-bold">Post url: {post.url}</li>
                </ul>
            ))}
        </div>
    )
}

export default Posts
