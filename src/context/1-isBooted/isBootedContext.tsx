import React, { ReactNode, useState } from "react";

type IsBootedType = {
  isBoot: boolean;
  setIsBoot: () => void;
};

type INode = {
  children: ReactNode;
};

const IsBootedContext = React.createContext<IsBootedType | undefined>(
  undefined
);

export const BootedContextProvider: React.FC<INode> = ({ children }) => {
  const [isBoot, setIsBoot] = useState<boolean>(false);

  // Function to update boot state
  const settingBoot = () => {
    setIsBoot((prev) => (prev = true));
  };
  return (
    <IsBootedContext.Provider value={{ isBoot, setIsBoot: settingBoot }}>
      {children}
    </IsBootedContext.Provider>
  );
};
// Custom hook to use the context
export const useIsBootedContext = () => {
  const context = React.useContext(IsBootedContext);
  if (!context) {
    throw new Error(
      "useIsBootedContext must be used within BootedContextProvider"
    );
  }
  return context;
};
