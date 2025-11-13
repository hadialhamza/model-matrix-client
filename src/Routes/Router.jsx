import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../components/pages/modelDetails/ModelDetails";
import EditModel from "../components/pages/updateModel/UpdateModel";
import HomePage from "../components/pages/home/HomePage";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import AllModels from "../components/pages/allModels/AllModels";
import AddModel from "../components/pages/addModel/AddModel";
import MyPurchase from "../components/pages/myPurchase/MyPurchase";
import MyModels from "../components/pages/myModels/MyModels";

// create a variable for router with create browser router
const router = createBrowserRouter([
  {
    // layouts will be mentioned here
    path: "/", // path: "/" will be the root path
    element: <MainLayout />, // this is main layout
    errorElement: <div>404 Page Not Found</div>, // this is error 404 page

    // children will render in the middle of the layout in outlet section
    children: [
      {
        index: true, // index true will be the default page
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "models",
        element: <AllModels />,
      },
      {
        path: "add-model",
        element: (
          <PrivateRoute>
            <AddModel />,
          </PrivateRoute>
        ),
      },
      {
        path: "models/:id",
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <EditModel />
          </PrivateRoute>
        ),
      },
      {
        path: "my-purchase",
        element: <MyPurchase />,
      },
      {
        path: "my-models",
        element: <MyModels />,
      },
    ],
  },
]);

export default router;
