import React from "react";
import * as C from "./styles";

export const LoadingIndicator = () => {
  return (
    <C.Container>
      <h2>Carregando</h2>
      <C.Loader></C.Loader>
    </C.Container>
  );
};
