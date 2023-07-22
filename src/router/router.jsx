import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/home/Home";
import Main from "../layout/Main";
import Signin from "../page/authentication/signin/Signin";
import Signup from "../page/authentication/signup/signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
          path: '/singup',
          element: <Signup />
        }
      ]
    },
  ]);


  export default router;