import { User } from '../../domain/entities/User';
import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../sources/remote/models/ResponseApiDelivery';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ====== Funciones auxiliares (modo local) ======
const registerLocal = async (user: User): Promise<ResponseApiDelivery> => {
  try {
    const userToSave = {
      ...user,
      id: Date.now(),
      session_token: 'local-token-' + Date.now(),
    };
    await AsyncStorage.setItem('registered_user', JSON.stringify(userToSave));

    return {
      success: true,
      message: 'Usuario registrado correctamente (modo local)',
      data: userToSave,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error al registrar localmente',
    };
  }
};

const loginLocal = async (email: string, password: string): Promise<ResponseApiDelivery> => {
  try {
    const stored = await AsyncStorage.getItem('registered_user');

    if (!stored) {
      return {
        success: false,
        message: 'No hay usuarios registrados. Primero crea una cuenta.',
      };
    }

    const user = JSON.parse(stored);

    if (user.email === email && user.password === password) {
      return {
        success: true,
        message: 'Login exitoso (modo local)',
        data: user,
      };
    } else {
      return {
        success: false,
        message: 'Correo o contraseña incorrectos',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Error al iniciar sesión localmente',
    };
  }
};

// ====== Repositorio ======
export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
      return response.data;
    } catch (error) {
      console.log('Backend no disponible → usando modo local');
      return registerLocal(user);
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log('Backend no disponible → usando modo local');
      return loginLocal(email, password);
    }
  }
}