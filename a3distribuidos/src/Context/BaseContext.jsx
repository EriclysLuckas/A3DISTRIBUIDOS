import { createContext } from "react";
import Utils from "../Hooks/Utils";

export const BaseContext = createContext();

// eslint-disable-next-line react/prop-types
export const BaseProvider = ({ children }) => {
  

  return <BaseContext.Provider value={Utils()}>{children}</BaseContext.Provider>;
};