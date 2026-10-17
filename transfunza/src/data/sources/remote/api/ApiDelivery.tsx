import axios from 'axios';

/**
 * Cliente HTTP para la API de TransFunza.
 * Cambia BASE_URL por la IP de tu backend o por la URL de producción.
 * Ejemplo local: 'http://192.168.1.10:3000/api'
 * Ejemplo con tunnel: 'https://tu-backend.ngrok.io/api'
 */
const BASE_URL = 'http://192.168.1.10:3000/api'; // <-- Ajustar según tu entorno

const ApiDelivery = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export { ApiDelivery };
