import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Books from "../pages/Books";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      //   {
      //     path: '/product-details/:id',
      //     element: <ProductDetails />,
      //   },
      //   {
      //     path: '/checkout',
      //     element: (
      //       <PrivateRoute>
      //         <Checkout />,
      //       </PrivateRoute>
      //     ),
      //   },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
