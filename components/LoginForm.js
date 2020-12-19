import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/LoginForm.css";

function LoginForm() {
  const initialValues_ = {
    username: "",
    password: "",
  };

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username's length must be greater than 6!")
      .required("Username is required!"),
    password: Yup.string()
      .min(6, "Password's length must be greater than 6!")
      .required("Password is required!"),
  });
  const onSubmit_ = (value) => {
    console.log(value);
  };
  function onClick_Regis() {
    console.log("Clicked to Register!");
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
              <p className="header">Login</p>
              <label>Username</label>
              <Field className="field" type="text" name="username" />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />

              <div className = "button-wrapper">
                <button
                  className="button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Login
                </button>
              </div>

              <a href="#" onClick={onClick_Regis}>
                Register?
              </a>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
export default LoginForm;
