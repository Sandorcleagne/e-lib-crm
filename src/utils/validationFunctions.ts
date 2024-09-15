import { Dispatch, SetStateAction } from "react";
import { loginValidationObj } from "../types";

export const loginValidations = (
  email: string,
  password: string,
  setValidationError: Dispatch<SetStateAction<loginValidationObj>>
) => {
  const err: loginValidationObj = { email: "", password: "" };
  let status = false;
  if (!email) {
    err.email = "Email is required";
    setValidationError(err);
    status = true;
  } else {
    setValidationError({} as loginValidationObj);
    status = false;
  }
  if (!password) {
    err.password = "Password is required";
    setValidationError(err);
    status = true;
  } else {
    setValidationError({} as loginValidationObj);
    status = false;
  }
  return status;
};
