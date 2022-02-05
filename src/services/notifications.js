import instanceAxios from "../axios/axios";

const baseUrl = "/notifications";

const getId = () => (Math.random().toString(36) + Date.now().toString(36)).substr(2)

const getAll = async () => {
    const response = await instanceAxios.get(baseUrl);
    return response.data;
};

const createNewNotification = async (message) => {
    const object = {
        id: getId(),
        message,
    };

    const response = await instanceAxios.post(baseUrl, object);
    return response.data;
};

const removeNotification = async (id) => {
    return await instanceAxios.delete(`${baseUrl}/${id}`)
};

export default { getAll, createNewNotification, removeNotification };