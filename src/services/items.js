import axios from "axios";

const baseURL = 'http://3.131.189.4:8089/api/items';

const getAll = () => {
    return axios.get(baseURL)
        .then(resp => resp.data)
        .catch(error => {
            console.error("Error fetching all items:", error);
            throw error;
        });
}

const createItem = (data) => {
    return axios.post(baseURL, data)
        .then(resp => resp.data)
        .catch(error => {
            console.error("Error creating item:", error);
            throw error;
        });
}

const deleteItem = (id) => {
    return axios.delete(`${baseURL}/${id}`)
        .then(resp => resp.data)
        .catch(error => {
            console.error("Error deleting item:", error);
            throw error;
        });
}

const updateItem = (data, id) => {
    return axios.put(`${baseURL}/${id}`, data)
        .then(resp => resp.data)
        .catch(error => {
            console.error("Error updating item:", error);
            throw error;
        });
}

export default { getAll, createItem, deleteItem, updateItem };
