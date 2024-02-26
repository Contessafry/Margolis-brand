import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:productId", // Usa il parametro :productId nell'URL
    element: <ProductDetails />,
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
