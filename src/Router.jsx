import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artist from "./pages/Artist";
import ViewItem from "./pages/subpages/ViewItem";
import ViewAlbums from "./pages/subpages/ViewAlbums";
import Cart from "./pages/subpages/Cart";
import RegisterUser from "./pages/subpages/RegisterUser";
import User from "./pages/subpages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "albums",
        element: <Albums />,
        // children: [
        //   {
        //     path: ":id",
        //     element: <ViewItem />,
        //   },
        // ],
      },
      {
        path: "/albums/:id",
        element: <ViewItem />,
      },
      {
        path: "artist",
        element: <Artist />,
        // children: [
        //   {
        //     path: ":id",
        //     path: ":id",
        //     element: <ViewAlbums />,
        //   },
        // ],
      },
      {
        path: "/artist/:id",
        element: <ViewAlbums />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user/register",
        element: <RegisterUser />,
      },
      {
        path: "/artist/:name/undefined",
        element: <Navigate to="/albums" />,
      },
    ],
  },
]);

export default router;
