import styled from "styled-components";

export const SubTotal = styled.h2`
  text-align: center;
  padding: 20px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 40px;
  gap: 20px;
  min-height: calc(100vh - 405px);
`;

export const CardProduct = styled.div`
  width: 240px;
  height: 300px;
  background-color: #fff;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 19%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: 0.3s;

  &&:hover {
    transform: scale(1.02);
    box-shadow: 2px 4px 12px rgb(0 0 0 / 40%);
  }
`;

export const Image = styled.img`
  width: 100px;
`;

export const ProductTitle = styled.p`
  font-weight: 600;
  line-height: 23px;
  width: 100%;
`;

export const Price = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #00d864;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 15px 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: #7f0afb;
  color: #fff;
  transition: all 0.3s;

  &&:hover {
    background-color: #9e48fb;
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
