"use client";
import React from "react";
import Logo from "@/components/Logo";
import { FaEye, FaLink } from "react-icons/fa";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useAuthStore } from "@/app/stores/auth.store";

const Header = () => {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();

  const isActive = (href: string) => {
    return (
      href === pathname ||
      href === pathname?.replace(/\/$/, "") ||
      pathname?.startsWith(href + "/")
    );
  };

  return (
    <div className="w-full shadow-sm bg-gray-50 md:py-6">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-white md:rounded-xl">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className={`flex gap-2 items-center px-[27px] py-[11px] rounded-lg text-[#737373] hover:text-primary transition-colors duration-300 ease-in-out ${
              isActive("/") ? "bg-primary-200 text-primary" : ""
            } `}
          >
            <FaLink size={18} />
            <span className="hidden md:block">Links</span>
          </Link>
          <Link
            href="/profile"
            className={`flex gap-2 items-center px-[27px] py-[11px] rounded-lg text-[#737373] hover:text-primary transition-colors duration-300 ease-in-out ${
              isActive("/profile") ? "bg-primary-200 text-primary" : ""
            } `}
          >
            <BiUserCircle size={28} />
            <span className="hidden md:block">Profile Details</span>
          </Link>
        </div>
        {user && (
          <div className="md:flex hidden gap-2">
            <p>{user?.email}</p>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </div>
        )}
        <div>
          <Link href="/preview">
            <Button
              variant="outline"
              className="flex gap-2 items-center px-[11px] md:px-[27px]"
            >
              <FaEye size={16} />
              <span className="hidden md:block">Preview</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
