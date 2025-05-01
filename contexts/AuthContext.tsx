import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (email: string, password: string) => {
    const fakeUser = { id: 1, email };
    setUser(fakeUser);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("userAuth 는 AuthProvider 안에서 사용해야 합니다.");
  }
  return context;
}
