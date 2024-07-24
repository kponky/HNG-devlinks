import SignupForm from "@/components/SignupForm";
import React from "react";

const Signup = () => {
  return (
    <div className="my-5">
      <h3 className="text-[32px] font-bold mb-4 font-Instrument Sans-sans-serif text-[#333333]">
        Create account
      </h3>
      <p className="mb-6 text-[#737373] font-normal text-base font-Instrument">
        Let's get you started sharing your links!
      </p>
      <SignupForm />
    </div>
  );
};

export default Signup;
