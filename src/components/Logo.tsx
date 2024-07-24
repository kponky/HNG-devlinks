import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 py-10">
      <Image
        src="/images/solar_link-circle-bold.png"
        alt="solar link cirlce"
        loading="lazy"
        width={35}
        height={40}
        className="object-cover "
      />
      <p className="font-bold text-[28px]">devlinks</p>
    </div>
  );
};

export default Logo;
