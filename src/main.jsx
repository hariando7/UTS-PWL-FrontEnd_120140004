import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home'
import FormLogin from './pages/formLogin'
import Createaccount from './pages/createaccount'
import OrderPage from './pages/order/orderPage'
import AddProduct from './pages/product/addProduct'
import EditProduct from './pages/product/editProduct'
import ProductPage from './pages/product/productPage'
import AddUser from './pages/user/addUser'
import EditUser from './pages/user/editUser'
import UserPage from './pages/user/userPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/formLogin",
    element: <FormLogin />
  },
  {
    path: "/createaccount",
    element: <Createaccount />
  },
  {
    path: "/order/orderPage",
    element: <OrderPage />
  },
  {
    path: "/product/addProduct",
    element: <AddProduct />
  },
  {
    path: "/product/editProduct",
    element: <EditProduct />
  },
  {
    path: "/product/productPage",
    element: <ProductPage />
  },
  {
    path: "/user/addUser",
    element: <AddUser />
  },
  {
    path: "/user/editUser",
    element: <EditUser />
  },
  {
    path: "/user/userPage",
    element: <UserPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
