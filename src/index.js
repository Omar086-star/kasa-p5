import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import Flat from "./Pages/Flats/Flat.js"; 
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import About from './Pages/About/About.js';
import Errors from './Pages/Errors/Errors.js';

// import { Link } from 'react-router-dom';

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
  
    children: [
      {
        path: '*',
        element: <Errors />
      },
      {
        path: '/',
        element: <App />
      },
      {
        path:"/flat/:id" ,
        element:<Flat />
      },
      {
        path: '/About',
        element: <About/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

document.body.classList.add('loading'); // Ajouter la classe "loading" au body

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  () => {
    document.body.classList.remove('loading');
  }
);