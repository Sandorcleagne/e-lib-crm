import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useRef, useState } from "react";
import { loginValidations } from "../utils/validationFunctions";
import { CustomError, loginValidationObj } from "../types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../http/api";
import { useToast } from "../components/ui/hooks/use-toast";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<loginValidationObj>({
    email: "",
    password: "",
  });
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/dashboard/books");
    },
    onError: (error: unknown) => {
      const CustomError = error as CustomError;
      if (CustomError?.response === undefined) {
        toast({
          variant: "destructive",
          title: "Something went wrong please try again later",
        });
      } else {
        toast({
          variant: "destructive",
          title: CustomError?.response?.data?.message,
        });
      }
    },
  });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value || "";
    const password = passwordRef?.current?.value || "";
    const isValid = loginValidations(email, password, setValidationError);
    if (isValid === false) {
      mutation.mutate({ email, password });
    }
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
              <p className="text-red-600 text-xs">{validationError?.email}</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" ref={passwordRef} />
              <p className="text-red-600 text-xs">
                {validationError?.password}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button
                className="w-full"
                type={"submit"}
                disabled={mutation?.isPending ? true : false}
              >
                {mutation?.isPending === true ? "Please Wait" : "Sign in"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default LoginPage;
