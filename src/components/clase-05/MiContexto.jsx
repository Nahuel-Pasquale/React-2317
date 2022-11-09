import { createContext } from "react";

export const Contexto = createContext();

export const CtxProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{
        title: 'Mi primer Context',
        colorRed: '#ff005c',
        colorGreen: '#04a224',
        colorBlue: '#0072bb'
      }}
    >
      { children }
    </Contexto.Provider>
  )
}
