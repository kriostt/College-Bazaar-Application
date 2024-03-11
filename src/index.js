import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './pages/Header';
import CreationForm from './pages/profilCreation/UserRegistrationCreationForm';
import ProfilePage from './pages/profilCreation/SellersProfilePage';
import CatalogPage from './pages/profilCreation/SellersCatalogPage';
import MessagingUi from './pages/messaging/MessagingUi';
import './App.css';
import Login from './pages/profilCreation/Login';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <><Header/><App/></>,
    element: <><Header/><Login/></>,
  },
  {
    path: "/sign-up",
    element: <><Header/><CreationForm/></>,
  },
  {
    path: "/myProfile",
    element: <><Header/><ProfilePage/></>,
  },
  {
    path: "/reviews",
    element: <><Header/><CatalogPage/></>,
  },
  {
    path: "/messaging",
    element: <><Header/><MessagingUi/></>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
