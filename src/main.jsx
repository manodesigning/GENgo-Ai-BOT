import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import Inputbox from './component/InputBox/Inputbox'  // Uncomment if needed

// Define the router and routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // Uncomment below if you want to use Inputbox as a default element
    // element: <Inputbox />,
  },
  {
    path: "/about", 
    element: <About />,
  },
]);

// Render the app with router
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
