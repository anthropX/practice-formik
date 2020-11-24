import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";

const validate = (values) => {
  let errors = {};
  if (!values.firstName) errors.firstName = "Required";
  else if (values.firstName.length > 15)
    errors.firstName = "Mustn't exceed 15 chars";

  if (!values.lastName) errors.lastName = "Required";
  else if (values.lastName.length > 15)
    errors.lastName = "Mustn't exceed 15 chars";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email";
  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="email">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
