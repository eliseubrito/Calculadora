import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [result, setResults] = useState([]);
  return (
    <DataContext.Provider value={{ result, setResults }}>
      {children}
    </DataContext.Provider>
  );
};
