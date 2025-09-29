import axios from 'axios';

// Fetch base URL from environment variables or use a default URL
const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// Create an axios instance with base URL and default headers
const axiosInstance = axios.create({
  baseURL: apiUrl,    // Use the API base URL
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers if needed
  },
});

export default axiosInstance;
