import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllModels from "../Pages/AllModels";
import AddModels from "../Pages/AddModels";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails";
import UseAxios from "../hooks/UseAxios";
import UpdateModel from "../Pages/UpdateModel";
import MyModels from "../Pages/MyModels";
import PurchasedModels from "../Pages/PurchasedModels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "models",
        element: <AllModels></AllModels>,
      },
      {
        path: "addmodels",
        element: (
          <PrivateRoute>
            <AddModels></AddModels>
          </PrivateRoute>
        ),
      },
      {
        path: "models/:id",
        loader: ({ params }) =>
          fetch(`https://ai-theta-ashy.vercel.app/models/${params.id}`),
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
      },
      {
        path: "update-model/:id",
        loader: ({ params }) =>
          fetch(`https://ai-theta-ashy.vercel.app/models/${params.id}`),
        element: <PrivateRoute>
          <UpdateModel></UpdateModel>
        </PrivateRoute>,
      },
      {
        path:"myModels",
        element:<PrivateRoute>
          <MyModels></MyModels>
        </PrivateRoute>
      },
      {
        path:"purchasedModels",
        element:<PrivateRoute>
          <PurchasedModels></PurchasedModels>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
