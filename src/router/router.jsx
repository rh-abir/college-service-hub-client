import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/home/Home";
import Main from "../layout/Main";
import Signin from "../page/authentication/signin/Signin";
import Signup from "../page/authentication/signup/signup";
import ErrorPage from "../page/errorpage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/signin',
          element: <Signin />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    },
  ]);


  export default router;