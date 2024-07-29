"use client";
import React, { useEffect } from "react";
import { useAuthStore } from "../stores/auth.store";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  return <div>{children}</div>;
};

export default AuthGuard;
