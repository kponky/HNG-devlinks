/* eslint-disable react/no-unescaped-entities */
"use client";

import { CreateUserInput } from "@/app/Interfaces/auth.interface";
import { useAuthStore } from "@/app/stores/auth.store";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import * as Yup from "yup";
import Button from "./Button";

const SignupForm = () => {
  const { createUser, loading } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCPasswordVisibility = () => {
    setShowCPassword(!showCPassword);
  };

  const formik = useFormik<CreateUserInput>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { confirmPassword, ...rest } = values;
        await createUser(rest);
      } catch (err) {
        console.log(err);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-700 mb-2"
        >
          Email address
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="alex@email.com"
            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
              formik.touched.email && formik.errors.email && "border-red-500"
            }`}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-700 mb-2"
        >
          Confirm Password
        </label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Enter your password"
            className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 ${
              formik.touched.password &&
              formik.errors.password &&
              "border-red-500"
            }`}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-400 cursor-pointer size-8 flex items-center justify-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
        {/* <p>Password must containin at least & character</p> */}
        <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block mb-1 text-[12px] font-medium text-gray-700"
        >
          Confirm password
        </label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showCPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm your password"
            className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 ${
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword &&
              "border-red-500"
            }`}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-400 cursor-pointer size-8 flex items-center justify-center"
            onClick={toggleCPasswordVisibility}
          >
            {showCPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>
      <Button
        type="submit"
        className="w-full bg-background-primary bg-primary text-white py-2 px-4 rounded-md hover:bg-[#Beadff] shadow-sm hover:shadow-[0px_0px_32px_0px_#BEADFF] active:shadow-[0px_0px_32px_0px_#633CFF40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create new account
      </Button>
      <p className="mt-4 text-center">
        Already have an account?
        <Link href="/login" className="text-primary  hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
