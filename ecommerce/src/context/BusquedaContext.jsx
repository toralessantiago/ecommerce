import { createContext, useState } from "react";

export const BusquedaContext = createContext();

export function BusquedaProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <BusquedaContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </BusquedaContext.Provider>
  );
}
