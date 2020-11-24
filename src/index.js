import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import "./styles.css";
import MyInput from "./MyInput";

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
          <MyInput label="First Name" name="firstName" type="text" />
          <MyInput label="Last Name" name="lastName" type="text" />
          <MyInput label="Email" name="email" type="text" />
        </Form>
      )}
    </Formik>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
