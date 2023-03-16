import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("result: ", props.loginUserOnSite(values));
    },
  });

  return (
    <div className={s.content}>
      <form className={s.loginForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="email"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}

        <label htmlFor="password"></label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={s.error}>{formik.errors.password}</div>
        ) : null}

        <label>
          <input
            className={s.rememberMe}
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            defaultChecked={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          Remember me!
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
