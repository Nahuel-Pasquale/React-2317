import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { counterInitialState, counterReducer } from "../counter/CountReducer";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

const CountContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const data = { state, dispatch }

  return <CountContext.Provider value={data}> { children } </CountContext.Provider>;
}

export { CountContextProvider }
