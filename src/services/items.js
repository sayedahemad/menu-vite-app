import axios from "axios";

const baseURL = 'http://3.131.189.4:8089/api/items'

// const getAll = () => {
//     const resp = axios.get(baseURL)
//     return resp.then(resp => resp.data)
// }

const getAll = () => {
    return axios.get(baseURL)
        .then(resp => resp.data)
        .catch(error => {
            // Handle error
            console.error("Error:", error);
            throw error; // Re-throw the error to propagate it
        });
}


const createItem = (data) => {
    const resp = axios.post(baseURL, data)
    return resp.then(resp => resp.data)
}

const deleteItem = (id) => {
    const resp = axios.delete(`${baseURL}/${id}`);
    return resp.then(resp => resp.data)
}

const updateItem = (data, id) => {
    const resp = axios.put(`${baseURL}/${id}`, data)
    return resp.then(resp => resp.data)
}

export default { getAll, createItem, deleteItem, updateItem }