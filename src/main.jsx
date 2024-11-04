import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/Register/Register';
import ListDetails from './components/ListDetails/ListDetails';
import Hotels from './components/Hotels/Hotels';
import Motels from './components/Motels/Motels';
import Resorts from './components/Resorts/Resorts';
import Lodges from './components/Lodges/Lodges';
import VacationRentals from './components/VacationRentals/VacationRentals';
import HotelDetails from './components/HotelDetails/HotelDetails';
import MotelDetails from './components/MotelDetails/MotelDetails';
import ResortDetails from './components/ResortDetails/ResortDetails';
import LodgesDetails from './components/LodgesDetails/LodgesDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/listDetails/:id",
        element:<ListDetails></ListDetails>,
      },
      {
        path:"/hotels",
        element:<Hotels></Hotels>
      },
      {
        path: "/motels",
        element: <Motels></Motels>
      },
      {
        path:"/resorts",
        element:<Resorts></Resorts>
      },
      {
        path:"/lodges",
        element: <Lodges></Lodges>
      },
      {
        path: "/vacationRentals",
        element:<VacationRentals></VacationRentals>
      },
      {
        path:"/hotels/:id",
        element: <HotelDetails></HotelDetails>
      },
      {
        path:"/motels/:id",
        element: <MotelDetails></MotelDetails>
      },
      {
        path:"/resorts/:id",
        element:<ResortDetails></ResortDetails>
      },
      {
        path:"/lodges/:id",
        element:<LodgesDetails></LodgesDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)
