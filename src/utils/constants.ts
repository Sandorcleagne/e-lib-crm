import { addBookBreadCrum, breadCrumbs } from "../types";

// local Environment
export const baseUrl = "http://localhost:8080/api/v1";
export const homePageBreadCrumbs: breadCrumbs[] = [
  { id: 1, title: "Home", href: "/dashboard/home" },
  { id: 2, title: "Books", href: "" },
];
export const addBookPageBreadCrumbs: addBookBreadCrum[] = [
  { id: 1, title: "Home", href: "/dashboard/home" },
  { id: 2, title: "Books", href: "/dasboard/books" },
  { id: 3, title: "Add Book", href: "/dashboard/addbook" },
];
