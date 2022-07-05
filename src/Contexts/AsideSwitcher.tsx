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
  aside: string;
  setAside: Dispatch<SetStateAction<string>>;
  width: number;
  modalSearch: boolean;
  setModalSearch: Dispatch<SetStateAction<boolean>>;
}

export const AsideSwitcherContext = createContext({} as ContextType);

interface VideoContextProviderProps {
  children: ReactNode;
}

export function AsideSwitcherContextProvider({
  children,
}: VideoContextProviderProps) {
  const { width } = useWindowDimensions();
  const [modalSearch, setModalSearch] = useState(false);

  const [aside, setAside] = useState(
    width >= 1000
      ? "true"
      : width >= 700 && width < 1000
      ? "false"
      : width < 700
      ? "none"
      : ""
  );

  useEffect(() => {
    setAside(
      width >= 1000
        ? "true"
        : width >= 700 && width < 1000
        ? "false"
        : width < 700
        ? "none"
        : ""
    );
  }, [width]);

  return (
    <AsideSwitcherContext.Provider
      value={{ aside, setAside, width, modalSearch, setModalSearch }}
    >
      {children}
    </AsideSwitcherContext.Provider>
  );
}
