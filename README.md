Movie App es una plataforma web que sirve como buscador de peliculas sin videos. Con esto se podra demostrar la destresa que tiene el desarrollador Frontend trabajando en proyectos con React + TypeScript + Vite

# Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)


# Instalación
Es importante seguir estos pasos para poder ejecutar la plataforma de manera local
En mi caso trabaje con npm

### Clonar el repositorio
git clone https://github.com/JairoRamirezC/MovieApp.git

### Navegar al directorio del proyecto
cd MovieApp

### SASS
```npm install --save-dev node-sass``` Y/O ```npm install -D```

### React-Router-Dom
```npm i react-router-dom```

### Axios
```npm install axios```

### Material UI
```npm install @mui/material @emotion/react @emotion/styled @mui/icons-material```

### Jest (https://jestjs.io/docs/getting-started)
```npm install --save-dev jest```

```npm install --save-dev @types/jest```

```npm install --save-dev @babel/preset-typescript```

```npm install --save-dev babel-jest @babel/core @babel/preset-env```

### React Testing Library (https://testing-library.com/docs/react-testing-library/intro)
```npm install --save-dev @testing-library/react @testing-library/dom```

# Uso
```npm run dev```

# Capturas de Pantalla
![image](https://github.com/JairoRamirezC/MovieApp/assets/19558437/425307a0-9239-4adf-bdd7-dc9e79e33c80)

![image](https://github.com/JairoRamirezC/MovieApp/assets/19558437/513057e0-aecc-42c0-b559-a4ce0b330a2d)

# Estructura del Proyecto
```plaintext
MOVIE-APP/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── Icons/
│   │   └── images/
│   ├── common/
│   │   ├── context/
│   │   ├── helpers/
│   │   ├── routers/
│   │   ├── styles/
│   │   └── utils/
│   ├── components/
│   │   ├── CardDescription/
│   │   │   ├── _cardDescription.scss
│   │   │   └── CardDescription.tsx
│   │   ├── ErrorComponent/
│   │   ├── inputSearch/
│   │   ├── Preview_cards/
│   │   └── Skeleton/
│   ├── pages/
│   │   ├── Favourites/
│   │   ├── Movies/
│   │   └── SearchPage/
│   │       ├── _searchPage.scss
│   │       └── SearchPage.tsx
│   ├── index.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── .eslintrc.cjs
│   ├── jest.config.js
│   ├── jest.setup.js
├── .gitignore
├── API.env
├── babel.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```
# Tecnologías Utilizadas
- React
- Typescript
- React Router Dom
- Axios
- Context
- Sass
- Material UI


DEV: Jairo Ramirez Castanio - @JairoRamirezC
