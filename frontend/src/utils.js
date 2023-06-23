import axios from "axios";

export const tasksFetch = axios.create({
  baseURL: "http://localhost:3000/api/v1/tasks",
});
