# TransFunza – Aplicación Móvil de Transporte Público

Aplicación React Native (Expo + TypeScript) para el seguimiento de transporte público en Funza, Mosquera, Madrid y Facatativá.

Desarrollada siguiendo la arquitectura limpia (Clean Architecture) y el tutorial de autenticación del curso de Computación Móvil, adaptada al dominio de **TransFunza**.

---

## Características implementadas (alcance del tutorial)

- **Registro de usuarios** con validaciones
- **Inicio de sesión** con JWT / sesión local
- **Persistencia de sesión** con AsyncStorage
- **Cierre de sesión**
- **Navegación condicionada** (Home ↔ Profile)
- **Arquitectura limpia**:
  - `data` → repositorios + fuentes (local / remota)
  - `domain` → entidades + interfaces + use cases
  - `presentation` → vistas + ViewModels + componentes + tema

---

## Stack tecnológico

| Tecnología              | Versión aproximada |
|-------------------------|--------------------|
| Expo                    | ~54                |
| React Native            | 0.81               |
| TypeScript              | 5.9                |
| React Navigation        | 7.x                |
| Axios                   | 1.x                |
| AsyncStorage            | 2.x                |

---

## Estructura del proyecto

```
transfunza/
├── App.tsx                          # Navegación raíz
├── index.ts
├── app.json
├── package.json
├── assets/                          # Iconos e imágenes
└── src/
    ├── data/
    │   ├── repositories/            # AuthRepositoryImpl, UserLocalRepositoryImp
    │   └── sources/
    │       ├── local/LocalStorage.tsx
    │       └── remote/
    │           ├── api/ApiDelivery.tsx
    │           └── models/ResponseApiDelivery.tsx
    ├── domain/
    │   ├── entities/User.tsx
    │   ├── repositories/            # Interfaces
    │   └── useCases/
    │       ├── auth/                # LoginAuth, RegisterAuth
    │       └── userLocal/           # Save, Get, Remove
    └── presentation/
        ├── components/              # CustomTextInput, RoundedButton
        ├── hooks/useUserLocal.tsx
        ├── theme/AppTheme.tsx       # Colores teal de TransFunza
        └── views/
            ├── home/                # Login
            ├── register/
            └── profile/info/        # Perfil + Logout
```

---

## Instalación y ejecución

### 1. Requisitos previos
- Node.js 18+
- npm o yarn
- Expo Go instalado en el dispositivo móvil (o emulador Android/iOS)

### 2. Instalar dependencias
```bash
cd transfunza
npm install
```

### 3. Configurar la URL del backend
Edita el archivo:
```
src/data/sources/remote/api/ApiDelivery.tsx
```
Cambia `BASE_URL` por la IP de tu máquina o la URL de tu API:

```ts
const BASE_URL = 'http://TU_IP:3000/api';
```

> El backend debe exponer:
> - `POST /users/create`
> - `POST /users/login`

### 4. Ejecutar la aplicación

**Con Expo Go (recomendado sin emulador):**
```bash
npm start
# o
npx expo start --tunnel --clear
```
Escanea el código QR con Expo Go.

**Con emulador Android:**
```bash
npm run android
```

---

## Flujos principales

1. **Usuario nuevo** → Home → “Regístrate” → RegisterScreen → crea cuenta → vuelve a Home.
2. **Login exitoso** → se guarda el usuario en AsyncStorage → redirección automática a ProfileInfoScreen.
3. **Cerrar sesión** → se elimina el usuario local → regresa a HomeScreen.

---

## Colores de marca (AppTheme)

| Token         | Color     | Uso                          |
|---------------|-----------|------------------------------|
| primary       | `#0D9488` | Botones, barra de estado     |
| secondary     | `#F59E0B` | Estados de ruta (ámbar)      |
| danger        | `#EF4444` | Alertas / retrasos           |
| background    | `#F5F7FA` | Fondo general                |

---

## Próximos pasos (fuera del alcance actual)

Las pantallas de **Mapa, Rutas, Alertas y Reportes** definidas en los bocetos de Figma se pueden agregar sobre esta misma arquitectura:

- Crear nuevas carpetas en `presentation/views/`
- Agregar casos de uso en `domain/useCases/`
- Extender el `RootStackParamList` o migrar a Bottom Tabs

---

## Autor

Adaptación del taller de autenticación React Native (SENA / UNIMINUTO)  
al proyecto **TransFunza** – Computación Móvil.

---

## Licencia

Uso académico.
