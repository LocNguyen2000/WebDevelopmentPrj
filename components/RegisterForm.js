import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import LoginForm from "./LoginForm";
import * as Yup from "yup";
import "../css/RegisterForm.css";

function RegisterForm() {
  const initialValues_ = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username's length must be greater than 6!")
      .required("Username is required!"),
    password: Yup.string()
      .min(6, "Password's length must be greater than 6!")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Confirm password not matched")
      .required("Confirm password is required!"),
  });
  const onSubmit_ = (value) => {
    console.log(value);
  };
  function onClick_Login() {
    console.log("Clicked to Login!");
  }
  return (
    <Formik
      initialValues={initialValues_}
      validationSchema={validationSchema_}
      onSubmit={onSubmit_}
    >
      {(formik) => {
        return (
          <div className="container">
            <Form>
              <p className="header">Register</p>
              <label>Username</label>
              <Field className="field" type="text" name="username" />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />
              <label>Confirm Password</label>
              <Field className="field" type="password" name="confirmPassword" />
              <ErrorMessage
                className="error"
                name="confirmPassword"
                component="div"
              />

              <div className = "button-wrapper">
                <button
                  className="button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Register
                </button>
              </div>

              <a href="#" onClick={onClick_Login}>
                Already have an account? Login
              </a>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
export default RegisterForm;
