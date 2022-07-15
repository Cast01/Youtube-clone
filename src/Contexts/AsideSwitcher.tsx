import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useWindowDimensions } from "../Hooks/useWindowDimensions";

interface ContextType {
  aside: AsideType | undefined;
  setAside: Dispatch<SetStateAction<AsideType | undefined>>;
  modalSearch: boolean;
  setModalSearch: Dispatch<SetStateAction<boolean>>;
}

export const AsideSwitcherContext = createContext({} as ContextType);

interface VideoContextProviderProps {
  children: ReactNode;
}

export type AsideType = "true" | "false" | "none" | (() => void);

export function AsideSwitcherContextProvider({
  children,
}: VideoContextProviderProps) {
  const { width } = useWindowDimensions();
  const [modalSearch, setModalSearch] = useState(false);

  const [aside, setAside] = useState<AsideType>();
  console.log(aside);

  useEffect(() => {
    const asideValue = () => {
      if (width >= 1000) {
        setAside("true");
      } else if (width >= 700 && width < 1000) {
        setAside("false");
      } else if (width < 700) {
        setAside("none");
      }
    };

    setAside(asideValue);
  }, [width]);

  return (
    <AsideSwitcherContext.Provider
      value={{ aside, setAside, modalSearch, setModalSearch }}
    >
      {children}
    </AsideSwitcherContext.Provider>
  );
}
