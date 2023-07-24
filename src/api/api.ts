import axios from "./axios";

export const register = async(data) =>{

    const response = await axios.post('/users/create', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response;

}

export const login = async(data) =>{

    const response = await axios.post('/users/login', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response;

}
