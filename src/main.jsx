
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Router,RouterProvider}from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
// import Inputbox from './component/InputBox/Inputbox'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    // path:"./",
    // element:<Inputbox/>
  },
  {
    path: "/about", 
    element: <About />,
  },
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
