import React from "react";
import { Outlet,createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import "./assets/scss/base.scss"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import AllGlasses from "./pages/AllGlasses";
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import DesignGlasses from "./pages/DesignGlasses"
import Sale from "./pages/Sale"

function App() {

  const Layout = () => {
    return (<div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>)
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children: [{
        path: "/",
        element: 
          <Home />
      },
      {
        path:"/allGlasses",
        element:<AllGlasses />,
      },
      {
        path:"/aboutUs",
        element:<AboutUs />,
      },
      {
        path:"/designGlasses",
        element:<DesignGlasses />,
      },
      {
        path:"/sale",
        element:<Sale />,
      },
      {
        path:"/contactUs",
        element:<ContactUs />,
      },

    ]
    },
    
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
