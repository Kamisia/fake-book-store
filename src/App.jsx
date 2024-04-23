import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Cart, Landing, Search } from "./pages";

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },

      {
        path: `${import.meta.env.BASE_URL}search`,
        element: <Search />,
      },

      {
        path: `${import.meta.env.BASE_URL}cart`,
        element: <Cart />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
