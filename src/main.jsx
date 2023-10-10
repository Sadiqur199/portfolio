import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Achivement from './Component/Acivement/Achivement.jsx';
import Contact from './Component/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/achivement',
        element:<Achivement></Achivement>
      }

    ],

  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
