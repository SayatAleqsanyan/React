import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Posts = () => {

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)


  const getPosts = async (page, limit) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }


  const fetchPosts = async () => {
    const filteredPosts = await getPosts(currentPage, limit)
    setPosts(filteredPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage, limit])

  return (<div className="flex flex-col pl-[100px] ">
      {posts.map((post) => (<ul key={post.id} className="p-5">
          <li className="font-bold">Post No: {post.id}</li>
          <li className="font-bold">Post title: {post.title}</li>
          <li className="font-bold">Post url: {post.body}</li>
        </ul>

      ))}
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"

          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1)
            }else {
              setCurrentPage(10)
            }

          }}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"
          onClick={() => {
            if (currentPage < 10) {
              setCurrentPage(currentPage + 1)

            }else {
              setCurrentPage(1)
            }
          }}
        >
          Next
        </button>
      </div>
    </div>)
}

export default Posts
