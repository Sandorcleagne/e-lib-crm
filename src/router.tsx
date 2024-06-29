import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
