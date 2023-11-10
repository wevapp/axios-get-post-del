import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// get post request
export const fetchPosts = async () => {
    try{
        const { data } = await axios.get(`${API_URL}?_limit=5`)
        return data
    }catch(error){
        console.log(error)
    }
}

export const updatePost = async (id, updatedPost) => {
    try{
        const { data } = await axios.put(`${API_URL}/${id}`, updatedPost)
        return data
    }catch(error){
        console.log(error)
    }
}

export const deletePost =  async (id) => {
    try{
        await axios.delete(`${API_URL}/${id}`)
        return id
    }catch(error){
        console.log(error)
    }
}

export const createPost = async (newPOst) => { // ang laman ng newPOst ay yung laman ni bagongPost, then ilalagay sa json api using axios.post, then ifefetch sa app.jsx
    try{
        const { data } = await axios.post(API_URL, newPOst)
        return data
    }catch(error){
        console.log(error)
    }
}