import { Routes, Route } from "react-router-dom";
import Habilidades from "./pages/Habilidades/Habilidades";
import Home from "./pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/habilidades" element={<Habilidades />} />
    </Routes>
  );
}
