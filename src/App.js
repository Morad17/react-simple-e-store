import React, { useContext } from "react";
import { Outlet,createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import "./assets/scss/base.scss"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"

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
    ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
