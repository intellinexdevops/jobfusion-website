"use client";

import { AuthService } from "@/services/auth-service";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface AuthProps {
  token: string;
}

const AuthContext = createContext<AuthProps>({
  token: "",
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string>("");

  const authService = new AuthService();

  const login = async () => {
    try {
      const token = await authService.login();
      setToken(token as string);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}
