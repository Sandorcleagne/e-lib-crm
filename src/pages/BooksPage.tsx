import { Button } from "../components/ui/button";
import { getBooks } from "../http/booksApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BreadCrumbs from "../customComponents/BreadCrumbs";
import { homePageBreadCrumbs } from "../utils/constants";
import DataTable from "../customComponents/DataTable";
import { Link } from "react-router-dom";
// import { AutoComplete } from "../customComponents/AutoComplete";

const BooksPage = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop();
      if (cookieValue) {
        return cookieValue.split(";").shift();
      }
    }
    return undefined;
  }

  const fetchData = async () => {
    try {
      const accessToken = getCookie("accessToken");
      if (!accessToken) {
        navigate("/login");
        throw new Error("Access token not found in cookies.");
      } else {
        setAuthChecked(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Run fetchData only once when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    enabled: authChecked, // Only run query if auth is checked
  });
  console.log("data", data);
  // Fetch data after auth is checked
  useEffect(() => {
    if (authChecked) {
      refetch();
    }
  }, [authChecked, refetch]); // Add refetch as a dependency

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>There is some error</p>;
  }
  if (data?.data?.result.length === 0) {
    return (
      <>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button className="mt-4">Add Product</Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <BreadCrumbs links={homePageBreadCrumbs} />
        {/* <AutoComplete /> */}
        <Link to="/dashboard/addbook">
          <Button className="mt-4">Add Book</Button>
        </Link>
      </div>
      <DataTable data={data?.data?.result?.books} />
      <Outlet />
    </>
  );
};

export default BooksPage;
