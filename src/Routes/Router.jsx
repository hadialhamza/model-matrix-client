import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Components/Pages/Home/HomePage";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

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
    ],
  },
]);

export default router;
