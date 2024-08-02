import { get, del, put, patch, post} from "../utils/request"

export const getAllTasks = async () => {
    const result = await get('tasks');
    return result;
}

export const createTask = async (options) => {
    const result = await post(`tasks`, options);
    return result;
};

export const updateTask = async (id, options) => {
  const result = await put(`tasks/${id}`, options);
  return result;
};

export const deleteTask = async (id) => {
  const result = await del(`tasks/${id}`);
  return result;
};

export const getDetailTask = async (id) => {
  const result = await get(`tasks/${id}`);
  return result;
};
