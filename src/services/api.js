import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // URL da API
}); 

export default api; // Exporta a API para ser utilizada em outros arquivos  