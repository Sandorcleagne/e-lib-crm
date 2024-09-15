import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import BooksPage from "./pages/BooksPage.tsx";
import RegisterPage from "./pages/Register.tsx";
import DashboardLayout from "./layout/DashboardLayout.tsx";
import AddBookPage from "./pages/AddBookPage.tsx";
export const router = createBrowserRouter([
  {
    path: "dashboard",

    element: <DashboardLayout />,
    children: [
      {
        path: "books",
        element: <BooksPage />,
      },
      { path: "addbook", element: <AddBookPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
