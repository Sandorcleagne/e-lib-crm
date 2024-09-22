import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import BreadCrumbs from "../customComponents/BreadCrumbs";
import { addBookPageBreadCrumbs } from "../utils/constants";
import { Textarea } from "../components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { addBook } from "../http/booksApi";
const AddBookPage = () => {
  const [values, setValues] = useState({
    title: "",
    genere: "",
    author: "",
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [bookPdf, setBookPdf] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const mutation = useMutation({
    mutationFn: (formData: FormData) => addBook(formData), // Mutation function
    onSuccess: (data) => {
      console.log("Book added successfully:", data);
      // Optionally reset the form on success
      setValues({
        title: "",
        genere: "",
        author: "",
      });
      setCoverImage(null);
      setBookPdf(null);
      setDescription("");
    },
    onError: (error) => {
      console.error("Error adding book:", error);
    },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Get the file list
    if (files && files.length > 0) {
      setCoverImage(files[0]); // Set the first file in the list
      console.log("Selected file:", files[0]); // Log the selected file
    } else {
      setCoverImage(null); // Clear the state if no file is selected
    }
  };
  const handleBookPdf = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Get the file list
    if (files && files.length > 0) {
      setBookPdf(files[0]); // Set the first file in the list
      console.log("Selected file:", files[0]); // Log the selected file
    } else {
      setBookPdf(null); // Clear the state if no file is selected
    }
  };
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("genre", values.genere);
    formData.append("author", values.author);
    formData.append("description", description);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    if (bookPdf) {
      formData.append("file", bookPdf);
    }

    // Call the mutation to submit form data
    mutation.mutate(formData);
  };
  return (
    <>
      <BreadCrumbs links={addBookPageBreadCrumbs} />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full h-full">
          <Card x-chunk="dashboard-07-chunk-0" className="w-full h-full">
            <CardHeader>
              <CardTitle>Add Book</CardTitle>
              <CardDescription>
                Fill in the details to add a new book to your collection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                {/* Row with two inputs for Title and Genere */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Title*</Label>
                    <Input
                      id="title"
                      type="text"
                      className="w-full"
                      placeholder="Name of the book"
                      name="title"
                      onChange={(e) => handleInputChange(e)}
                      value={values.title}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="genere">Genere*</Label>
                    <Input
                      id="genere"
                      type="text"
                      className="w-full"
                      placeholder="Genere of the book"
                      name="genere"
                      onChange={(e) => handleInputChange(e)}
                      value={values?.genere}
                      required
                    />
                  </div>
                </div>

                {/* Row with two inputs for Cover Image and Book PDF */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="coverImage">Cover Image*</Label>
                    <Input
                      id="coverImage"
                      type="file"
                      className="w-full"
                      onChange={(e) => handleCoverImage(e)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="bookFile">Book PDF*</Label>
                    <Input
                      id="bookFile"
                      type="file"
                      className="w-full"
                      onChange={(e) => handleBookPdf(e)}
                      required
                    />
                  </div>
                </div>

                {/* Author and Description fields */}
                <div className="grid gap-3">
                  <Label htmlFor="author">Author*</Label>
                  <Input
                    id="author"
                    type="text"
                    className="w-full"
                    placeholder="Author of the book"
                    name="author"
                    onChange={(e) => handleInputChange(e)}
                    value={values?.author}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    className="min-h-32"
                    name="description"
                    onChange={(e) => handleDescription(e)}
                    value={description}
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end items-center">
                  <Button className="mt-4">Add Book</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddBookPage;
