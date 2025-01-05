import React, { ReactNode, useState } from "react";
import { getIsLogged } from "@/constants/sessionStorage";
type IsLoggedType = {
  isLogged: boolean;
  setIsLog: () => void;
};
type INode = {
  children: ReactNode;
};
const isLoggedContext = React.createContext<IsLoggedType | undefined>(
  undefined
);

export const LoggedContextProvider: React.FC<INode> = ({ children }) => {
  const [isLogged, setIsLog] = useState<boolean>(getIsLogged);
  const settingLog = () => {
    setIsLog((prev) => (prev = true));
  };
  return (
    <isLoggedContext.Provider value={{ isLogged, setIsLog: settingLog }}>
      {children}
    </isLoggedContext.Provider>
  );
};
// ? use context directly
export const useIsLoggedContext = () => {
  const context = React.useContext(isLoggedContext);
  if (!context) {
    throw new Error(
      "useIsBootedContext must be used within BootedContextProvider"
    );
  }
  return context;
};
