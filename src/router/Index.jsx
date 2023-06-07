import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Index";
import Rating from "../pages/rating/Rating";
import Submit from "../pages/submit/Submit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Rating />,
      },
      {
        path: "/submit",
        element:  <Submit />
      }
    ],
  },
]);

export default router;
