import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: calc(100vh - 290px);
`;

export const Loader = styled.div`
  border: 8px solid #fff;
  border-top: 8px solid #3f047c;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
