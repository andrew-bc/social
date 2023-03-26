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
      captcha: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      captcha: props.captchaURL ? Yup.string().required("Required") : Yup.string(),
    }),
    onSubmit: (values, onSubmitProps) => {
      props.loginUserOnSite(
        values.email,
        values.password,
        values.rememberMe,
        values.captcha,
        onSubmitProps.setStatus,
        onSubmitProps.setSubmitting
      );
      onSubmitProps.setSubmitting(true);
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
        {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}

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
        {formik.touched.password && formik.errors.password && <div className={s.error}>{formik.errors.password}</div>}

        {props.captchaURL && (
          <div>
            <img src={props.captchaURL} alt="captcha" />
            <label htmlFor="captcha"></label>
            <input
              id="captcha"
              name="captcha"
              type="text"
              placeholder="CAPTCHA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.captcha}
            />
            {formik.touched.captcha && formik.errors.captcha && <div className={s.error}>{formik.errors.captcha}</div>}
          </div>
        )}

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
        <button type="submit" disabled={formik.isSubmitting}>
          Log In
        </button>
        {formik.status && <div className={s.error}>{formik.status}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
