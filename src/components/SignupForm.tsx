import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const SignupForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-700 mb-2"
        >
          Email address
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg gap-3 p-2 focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
          <FaEnvelope className="text-gray-400" />
          <input
            type="email"
            id="email"
            required
            className="w-full px-3 py-2 border-none focus:outline-none "
            placeholder="e.g. alex@email.com"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg gap-3 p-2  focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
          <FaLock className="text-gray-400" />
          <input
            type="password"
            id="password"
            required
            className="w-full px-3 py-2 border-none focus:outline-none"
            placeholder=" At least 8 Characters"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-700 mb-2"
        >
          Confirm Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg gap-3 p-2  focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
          <FaLock className="text-gray-400" />
          <input
            type="password"
            id="password"
            required
            className="w-full px-3 py-2 border-none focus:outline-none"
            placeholder=" At least 8 Characters"
          />
        </div>
        {/* <p>Password must containin at least & character</p> */}
      </div>
      <button
        type="submit"
        className="w-full bg-background-primary bg-primary text-white py-2 px-4 rounded-md hover:bg-[#Beadff] shadow-sm hover:shadow-[0px_0px_32px_0px_#BEADFF] active:shadow-[0px_0px_32px_0px_#633CFF40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create new account
      </button>
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
