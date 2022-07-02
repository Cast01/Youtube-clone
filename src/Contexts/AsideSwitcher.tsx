import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

interface ContextType {
  aside: boolean;
  setAside: Dispatch<SetStateAction<boolean>>;
}

export const AsideSwitcherContext = createContext({} as ContextType);

interface VideoContextProviderProps {
  children: ReactNode;
}

export function AsideSwitcherContextProvider({
  children,
}: VideoContextProviderProps) {
  const { width } = useWindowDimensions();

  const [aside, setAside] = useState(width >= 1000 ? true : false);

  useEffect(() => {
    setAside(width >= 1000 ? true : false);
  }, [width]);

  return (
    <AsideSwitcherContext.Provider value={{ aside, setAside }}>
      {children}
    </AsideSwitcherContext.Provider>
  );
}
