import { createContext, ReactNode, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <CounterContext.Provider
      value={{ count, increment }}
    >{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("userCounter must be used within a CounterProvider.");
  }
  return context;
}
