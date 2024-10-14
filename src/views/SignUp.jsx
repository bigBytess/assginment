import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: object({
      username: string().required("*Required").min(6, "Minimum 6 letters"),
      email: string().email("Enter valid email").required("*Required"),
      password: string().required("*Required").min(6, "Minimum 6 letters"),
      confirmPassword: string()
        .required("*Required")
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value; // Compare with password field
        }),
    }),
    onSubmit: (_values) => {
      navigate("/dashboard");
    },
  });

  return (
    <div className="max-w-96 mx-auto w-full px-2 ">
      <h1 className="my-4 text-center text-lg font-bold">SIGNUP</h1>
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
          {formik.touched.username && formik.errors.username && (
            <p className="text-xs text-error">{formik.errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className={`input w-full input-bordered ${
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }`}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-error">{formik.errors.email}</p>
          )}
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
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs text-error">{formik.errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            className={`input w-full input-bordered ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "input-error"
                : ""
            }`}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-xs text-error">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="mt-2">
          <button type="submit" className="w-full btn btn-primary">
            SIGN UP
          </button>
        </div>
      </form>
      <p className="text-center mt-2 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="link link-primary no-underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
