import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPosts, updatePost, deletePost, createPost } from '../services/apiService'

const Axios = () => {
  
    const [posts, setPosts] = useState([])

    useEffect (() =>{
      const getPosts = async () => {
        const postsData = await fetchPosts()
        setPosts(postsData)
      }
      getPosts()
    }, [])
  
    const handleDeletePost = async(id) => {
      await deletePost(id)
      setPosts(posts.filter((post) => post.id !== id))
    }
  
    const handleNewPost = async() => {
      const bagongPost = { // create new post
        title: 'new post',
        body: `this is a new post ${Date.now()}`,
        userId: '1'
      } // createPost from apiService
      const post = await createPost(bagongPost) // Then pass the bagongPost to newPOst in createPost from apiService
      setPosts([...posts, post]) 
    }
  
    return (
      <div className='container flex flex-col justify-center items-center'> 
        <button className='bg-green-500 w-[100px]' onClick={handleNewPost}>Add Post</button>
        <ul className='w-[600px]'>
          {posts.map((post) => (
            <li
              className='border my-2 p-2 flex justify-between' 
              key={post.id}>
              {post.id} | 
              {post.title} | 
              {post.body}
              <button className='bg-rose-500 px-4' onClick={() => {handleDeletePost(post.id)}}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Axios