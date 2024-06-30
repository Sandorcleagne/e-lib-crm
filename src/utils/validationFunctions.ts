import { Dispatch, SetStateAction } from "react";
import { ValidationErrorState } from "../types";

export const loginValidations = (
  email: string,
  password: string,
  setValidationError: Dispatch<SetStateAction<ValidationErrorState>>
) => {
  if (email?.trim() === "") {
    setValidationError((prevState) => ({
      ...prevState,
      emailErrorMsg: "Email is required.",
    }));
  }
  if (password?.trim() === "") {
    setValidationError((prevState) => ({
      ...prevState,
      passwordErrorMsg: "Password is required.",
    }));
  } else {
    setValidationError({
      emailErrorMsg: "",
      passwordErrorMsg: "",
    });
    return;
  }
};
