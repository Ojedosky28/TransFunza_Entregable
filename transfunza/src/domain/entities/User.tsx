export interface User {
  id?: number;
  name: string;
  lastname?: string;
  email: string;
  phone?: string;
  password?: string;
  image?: string;
  role?: string;
  session_token?: string;
  // Campos específicos TransFunza
  municipality?: string; // Funza, Mosquera, Madrid, Facatativá
}
