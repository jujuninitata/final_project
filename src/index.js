import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import Employee from './pages/Employee';
import Perdin from './pages/Perdin';
import Diklat from './pages/Diklat';
import Izin from './pages/Izin';
import Cuti from './pages/Cuti';
import Lembur from './pages/Lembur';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0e4ff',
      100: '#cbb2ff',
      200: '#a480ff',
      300: '#7a4dff',
      400: '#641bfe',
      500: '#5a01e5',
      600: '#5200b3',
      700: '#430081',
      800: '#2d004f',
      900: '#14001f',
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/employee',
    element: <Employee />,
  },
  {
    path: '/inbox',
    element: <Inbox />,
  },
  {
    path: '/perdin',
    element: <Perdin />,
  },
  {
    path: '/diklat',
    element: <Diklat />,
  },
  {
    path: '/izin',
    element: <Izin />,
  },
  {
    path: '/cuti',
    element: <Cuti />,
  },
  {
    path: '/lembur',
    element: <Lembur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
