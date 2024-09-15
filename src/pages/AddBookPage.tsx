import React from "react";
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
// import { Textarea } from "../components/ui/textarea";
const AddBookPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full h-full grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0" className="w-full h-full">
            <CardHeader>
              <CardTitle>Add Book</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Title*</Label>
                    <Input
                      id="title"
                      type="text"
                      className="w-full"
                      placeholder="Name of the book"
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
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="coverImage">Cover Image*</Label>
                    <Input
                      id="coverImage"
                      type="file"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="bookFile">Book PDF*</Label>
                    <Input
                      id="bookFile"
                      type="file"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="author">Auhtor*</Label>
                    <Input
                      id="author"
                      type="text"
                      className="w-full"
                      placeholder="Author of the book"
                      required
                    />
                  </div>
                  <div className="flex justify-end items-center">
                    <Button className="mt-4">Add Book</Button>
                  </div>
                </form>
                {/* <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                      className="min-h-32"
                    />
                  </div> */}
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
