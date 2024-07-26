import Button from "@/components/Button";
import Header from "@/components/Header";
import LinksList from "@/components/LinksList";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-2 grid lg:grid-cols-5 grid-cols-1  gap-6 mt-6">
        <div className="col-span-2">phone mockup</div>
        <div className="lg:col-span-3  col-span-1">
         <LinksList/>
        </div>
      </div>
    </div>
  );
};

export default Home;
