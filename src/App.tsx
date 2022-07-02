import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AsideSwitcherContextProvider } from "./Contexts/AsideSwitcher";
import Router from "./Router";

function App() {
  return (
    <AsideSwitcherContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AsideSwitcherContextProvider>
  );
}

export default App;
