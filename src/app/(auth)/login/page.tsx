import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="my-5">
      <h3 className="text-[32px] font-bold mb-4 font-Instrument Sans-sans-serif text-[#333333]">
        Login
      </h3>
      <p className="mb-6 text-[#737373] font-normal text-base font-Instrument">
        Add your details below to get back into the app
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
