import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllModels from "../Pages/AllModels";
import AddModels from "../Pages/AddModels";
import PrivateRoute from "./PrivateRoute";
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
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Registration></Registration>
      },
      {
        path:'allmodels',
        element:<PrivateRoute>
          <AllModels></AllModels>
        </PrivateRoute>
      },
      {
        path:'addmodels',
        element:<PrivateRoute>
          <AddModels></AddModels>
        </PrivateRoute>
      }
    ]
  },
]);


export default router;