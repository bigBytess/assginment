import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: object({
      username: string().required("*Required"),
      password: string().required("*Required").min(6, "Minimum 6 letters"),
    }),
    onSubmit: (_values) => {
      navigate("/dashboard");
    },
  });

  return (
    <div className="max-w-96 mx-auto w-full px-2">
      <h1 className="my-4 text-center text-lg font-bold">LOGIN</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className={`input w-full input-bordered ${
              formik.touched.username && formik.errors.username
                ? "input-error"
                : ""
            }`}
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-xs text-error">{formik.errors.username}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className={`input w-full input-bordered ${
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }`}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-xs text-error">{formik.errors.password}</p>
          ) : null}
        </div>
        <a
          href="#"
          className="link link-primary text-right p-1 no-underline text-sm"
        >
          Forget password?
        </a>
        <div>
          <button type="submit" className="btn btn-primary w-full">
            LOGIN
          </button>
        </div>
      </form>
      <p className="text-center mt-2 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="link link-primary no-underline">
          Sign-up
        </Link>
      </p>
    </div>
  );
};

export default Login;
