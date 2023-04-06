import React from "react";
import { MainRoutes } from "./Routes/MainRoutes";
import { ContextProvider } from "./Contexts/Context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <MainRoutes />
      <Footer />
    </ContextProvider>
  );
};

export default App;
