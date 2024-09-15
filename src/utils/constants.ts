import { breadCrumbs } from "../types";

// local Environment
export const baseUrl = "http://localhost:8080/api/v1";
export const homePageBreadCrumbs: breadCrumbs[] = [
  { id: 1, title: "Home", href: "/dashboard/home" },
  { id: 2, title: "Books", href: "" },
];
