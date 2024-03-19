import axios from 'axios';

// Créer une instance Axios avec l'URL de base de votre API
const axiosInstance = axios.create({
  baseURL: '/api', // Remplacez par l'URL de votre API
  timeout: 5000,
  headers: {
    'Accepts': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Bearer ' + token);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Exporter l'instance Axios configurée
export default axiosInstance;
