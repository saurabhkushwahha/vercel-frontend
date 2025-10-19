import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example requests
export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const fetchMaterials = () => api.get("/materials");
export const uploadResult = (data) => api.post("/results", data);

export default api;
