import axios from "axios";

const API = axios.create({ baseURL: `https://custom-video-player-backend.vercel.app/` });

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => API.get("/video/getvideos");
