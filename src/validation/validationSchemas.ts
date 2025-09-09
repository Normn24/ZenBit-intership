import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const getEmailField = () =>
  Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email")
    .required("Email is required")
    .min(4, "Email must be at least 4 characters");

const getPasswordField = () =>
  Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one lowercase letter, one uppercase letter, one number"
    );

export const authValidationSchema = () =>
  Yup.object().shape({
    email: getEmailField(),
    password: getPasswordField(),
  });
