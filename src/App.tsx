import React from "react";
import { MainRoutes } from "./Routes/MainRoutes";
import { ContextProvider } from "./Contexts/Context";
import { Header } from "./components/Header";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <MainRoutes />
    </ContextProvider>
  );
};

export default App;
