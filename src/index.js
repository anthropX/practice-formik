import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import "./styles.css";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: object({
      email: string().email("Invalid email").required("Required"),
      firstName: string()
        .max(15, "Mustn't exceed 15 char")
        .required("Required"),
      lastName: string().max(15, "Mustn't exceed 15 char").required("Required"),
    }),
    onSubmit: (values) => console.log(values),
  });
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="email">Last Name</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
