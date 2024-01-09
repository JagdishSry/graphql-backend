import axios from 'axios';

export const getTodoList = async (id = null) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id || ''}`);
    return response.data;
};