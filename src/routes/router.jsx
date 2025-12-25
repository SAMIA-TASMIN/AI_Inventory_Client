import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
// import Root from './Layouts/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
         index: true, 
         element: <Home></Home> ,
      }
    ]
  },
]);


export default router;