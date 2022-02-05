import instanceAxios from "../axios/axios";

const baseUrl = "/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
    const response = await instanceAxios.get(baseUrl);
    return response.data;
};

const createNew = async (content) => {
    const object = {
        id: getId(),
        content,
        votes: 0
    };
    const response = await instanceAxios.post(baseUrl, object);
    return response.data;
};

const update = async (id, newObject) => {
    const response = await instanceAxios.put(`${baseUrl}/${id}`, newObject);
    return response.data
};

export default { getAll, createNew, update };