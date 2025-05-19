import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7002/users",
});

export default instance;
