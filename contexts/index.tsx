import React from "react";
import { DiaryProvider } from "./DiaryContext";
import { CounterProvider } from "./CounterContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <DiaryProvider>
      <CounterProvider>{children}</CounterProvider>
    </DiaryProvider>
  );
}
