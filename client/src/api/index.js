import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000/` });

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => API.get("/video/getvideos");