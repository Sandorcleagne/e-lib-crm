// export interface ValidationErrorState {
//   emailErrorMsg: string;
//   passwordErrorMsg: string;
// }
export interface CustomError extends Error {
  response?: {
    status: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };
}

export interface loginValidationObj {
  email: string;
  password: string;
}

export interface breadCrumbs {
  id: number;
  title: string;
  href: string;
}
export interface dataItems {
  active: boolean;
  author: string;
  coverImage: string;
  createdAt: string;
  file: string;
  genre: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
