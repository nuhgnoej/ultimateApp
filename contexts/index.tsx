import React from "react";
import { DiaryProvider } from "./DiaryContext";
import { CounterProvider } from "./CounterContext";
import { AuthProvider } from "./AuthContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DiaryProvider>
        <CounterProvider>{children}</CounterProvider>
      </DiaryProvider>
    </AuthProvider>
  );
}
