import React from "react";
import { MainRoutes } from "./Routes/MainRoutes";
import { ContextProvider } from "./Contexts/Context";

const App = () => {
  return (
    <ContextProvider>
      <MainRoutes />
    </ContextProvider>
  );
};

export default App;
