import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Components/Pages/Home/HomePage";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllModels from "../Components/Pages/AllModels/AllModels";
import AddModel from "../Components/Pages/AddModel/AddModel";
import MyPurchase from "../Components/Pages/MyPurchase/MyPurchase";
import MyModels from "../Components/Pages/MyModels/MyModels";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../components/pages/modelDetails/ModelDetails";

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
