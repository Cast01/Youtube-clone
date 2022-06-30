import { ReactNode } from "react";
import { Container } from "./MainStyle";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
