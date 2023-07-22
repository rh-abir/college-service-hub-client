import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);


  export default router;