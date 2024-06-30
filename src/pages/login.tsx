import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { loginValidations } from "../utils/validationFunctions";
import { ValidationErrorState } from "../types";
const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<ValidationErrorState>({
    emailErrorMsg: "",
    passwordErrorMsg: "",
  });
  console.log("validationError", validationError);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    console.log(email);
    console.log(password);
    if (email === "" && password === "") {
      loginValidations(email, password, setValidationError);
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
              <p className="text-red-600 text-xs">
                {validationError?.emailErrorMsg}
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" ref={passwordRef} />
              <p className="text-red-600 text-xs">
                {validationError?.passwordErrorMsg}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button className="w-full" type={"submit"}>
                Sign in
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default LoginPage;
