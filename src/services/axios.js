import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env; // Destrutturazione delle variabili d'ambiente

const instance = axios.create({
  baseURL: VITE_BACKEND_URL,
  timeout: 5000, // tempo limite in cui la chiamata al BE resta "appesa"
});

export default instance;
