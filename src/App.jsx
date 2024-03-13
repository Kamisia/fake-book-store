import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Cart, Landing, Search } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },

      {
        path: "/search",
        element: <Search />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
