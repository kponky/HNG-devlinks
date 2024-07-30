"use client";
import React, { useEffect } from "react";
import { useAuthStore } from "../stores/auth.store";
// import { useAuthStore } from "@/stores/auth.store"; // Ensure this path is correct

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    if (initializeAuth) {
      initializeAuth();
    }
  }, [initializeAuth]);

  return <div>{children}</div>;
};

export default AuthGuard;
