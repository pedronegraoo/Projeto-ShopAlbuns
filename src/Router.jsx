import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artist from "./pages/Artist";
import ViewItem from "./pages/subpages/ViewItem";
import ViewAlbums from "./pages/subpages/ViewAlbums";
import Cart from "./pages/subpages/cart";

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
        //     path: ":id/viewitem",
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
        //     path: ":id/viewalbums",
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
        path: "/artist/:name/undefined",
        element: <Navigate to="/albums" />,
      },
    ],
  },
]);

export default router;