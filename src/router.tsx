import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/HomePage";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);
