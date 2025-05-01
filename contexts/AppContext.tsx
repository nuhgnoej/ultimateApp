import { createContext, useState } from "react";

interface AppContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);

  return (
    <AppContext.Provider value={{ count, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
}
