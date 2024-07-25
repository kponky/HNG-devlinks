"use client";
/* eslint-disable react/no-unescaped-entities */

console.log('This will not cause an ESLint error');


import React from "react";
import Button from "./Button";
import {
  FaChevronDown,
  FaEquals,
  FaGithub,
  FaLink,
  FaPlus,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const LinksList = () => {
  return (
    <div className=" bg-white ">
      <div className="px-10 pt-10">
        <h2 className="font-bold text-[32px] text-[#333333] mb-2">
          Customize Your Links
        </h2>
        <p className="font-normal text-base text-[#737373] mb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <Button
          variant="outline"
          className="flex items-center gap-2 w-full justify-center mb-6"
        >
          <FaPlus /> Add New Link
        </Button>
      </div>

      <div className="px-10">
        <div className="flex justify-center flex-col items-center bg-[#FAFAFA] py-16 lg:px-[100px] rounded-xl">
          <Image
            src="/images/Group 273.png"
            alt="vector"
            height={250}
            width={250}
            className="w-[249px]"
          />
          <h3 className="font-bold text-[32px] text-[#333333] pt-10 pb-6">
            Let's Get you Started
          </h3>
          <p className="font-normal text-base text-[#737373] text-center">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>

      <div className="px-3 bg-[#FAFAFA]  rounded-xl mx-10 pt-3 mt-5 pb-4">
        <div className="flex items-center justify-between mt-6  px-5  pb-3">
          <div className="flex items-center gap-2 text-[#737373] font-bold text-base">
            <FaEquals />
            <p>Link</p>
            <span> #1 </span>
          </div>
          <div>
            <p className="text-[#737373] font-normal text-base">Remove</p>
          </div>
        </div>
        <div className="px-5 mt-3">
          <label htmlFor="text" className="my-3">Platform</label>
          <div className="flex gap-2  items-center border border-[#d9d9d9] rounded-lg  p-2 focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
            <FaGithub />
            <p>GitHub</p>
            <input
              type="text"
              className="border-collapse outline-none w-full p-2 bg-transparent"
            />

            <FaChevronDown />
          </div>
        </div>
        <div className="px-5 mt-3">
          <label htmlFor="text" className="my-3">Link</label>
          <div className="flex gap-2  items-center border border-[#d9d9d9] rounded-lg  p-2 focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
            <FaLink />
            <p>https://www.github.com/benwright</p>
            <input
              type="text"
              className="border-collapse outline-none w-full p-2 bg-transparent"
            />

            <FaChevronDown />
          </div>
        </div>
      </div>
      <div className="px-3 bg-[#FAFAFA]  rounded-xl mx-10 pt-3  mt-3 pb-4">
        <div className="flex items-center justify-between mt-6  px-5  pb-3">
          <div className="flex items-center gap-2 text-[#737373] font-bold text-base">
            <FaEquals />
            <p>Link</p>
            <span> # 2 </span>
          </div>
          <div>
            <p className="text-[#737373] font-normal text-base">Remove</p>
          </div>
        </div>
        <div className="px-5 ">
          <label htmlFor="text" className="my-3">Platform</label>
          <div className="flex gap-2  items-center border border-[#d9d9d9] rounded-lg  p-2 focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
            <FaGithub />
            <p>GitHub</p>
            <input
              type="text"
              className="border-collapse outline-none w-full p-2 bg-transparent"
            />

            <FaChevronDown />
          </div>
        </div>

        <div className="px-5  my-3">
          <label htmlFor="text" className="my-3">Link</label>
          <div className="flex gap-2  items-center border border-[#d9d9d9] rounded-lg  p-2 focus-within:border-indigo-400 focus-within:shadow-[0px_0px_32px_0px_#633CFF40]">
            <FaLink />
            <p>https://www.Youtube:com/benwright</p>
            <input
              type="text"
              className="border-collapse outline-none w-full p-2 bg-transparent"
            />

            <FaChevronDown />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end px-10 py-6 border-t mt-6 ">
        <Button variant="solid" disabled>
          Save
        </Button>
      </div>
    </div>
  );
};

export default LinksList;
