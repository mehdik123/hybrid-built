import { createContext, useContext, type ReactNode } from "react";

const ScrollCtx = createContext(false);

export const useSmoothScroll = () => useContext(ScrollCtx);

/** Native browser scroll — custom wheel lerp felt laggy with video + rails. */
export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => (
  <ScrollCtx.Provider value={false}>{children}</ScrollCtx.Provider>
);
