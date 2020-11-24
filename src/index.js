import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string } from "yup";
import "./styles.css";

const App = () => {
  return (
    <Formik
      initialValues={{ email: "", firstName: "", lastName: "" }}
      validationSchema={object({
        email: string().email("Invalid email").required("Required"),
        firstName: string()
          .max(15, "Mustn't exceed 15 char")
          .required("Required"),
        lastName: string()
          .max(15, "Mustn't exceed 15 char")
          .required("Required"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form noValidate>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
