import axios from "axios";

const LOCAL_API = import.meta.env.VITE_LOCAL_API

export const fetchUsers = async () => {
    try {
        const {data} = await axios.get(LOCAL_API)
        return data
    } catch (error) {
        console.log(error)
    }
}



