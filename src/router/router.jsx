import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/home/Home";
import Main from "../layout/Main";
import Signin from "../page/authentication/signin/Signin";
import Signup from "../page/authentication/signup/signup";
import ErrorPage from "../page/errorpage/ErrorPage";
import Colleges from "../page/colleges/Colleges";
import MyCollege from "../page/myCollege/MyCollege";
import Admission from "../page/admission/Admission";
import CollageCardDetails from "../page/home/collageCard/CollageCardDetails";

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
        },
        {
          path: '/colleges',
          element: <Colleges />
        },
        {
          path: '/my-colleges',
          element: <MyCollege /> 
        },

        {
          path: '/admission',
          element: <Admission />
        },

        {
          path: '/colleges/details/:id',
          element: <CollageCardDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/collage/${params.id}`),
        }

      ]
    },
  ]);


  export default router;