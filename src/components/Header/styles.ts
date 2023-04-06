import styled from "styled-components";

export const Header = styled.header`
  background-color: #5907af;
`;

export const Sale = styled.p`
  padding: 15px;
  background-color: #460689;
  color: #fff;
  text-align: center;
  margin: 0px;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
`;

export const HeaderIcon = styled.span`
  color: #fff;
  font-size: 48px;
`;

export const HeaderSearch = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 15px;
  width: 40vw;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  font-size: 18px;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  padding: 20px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;

export const SearchIcon = styled.span`
  font-size: 18px;
  color: #460689;
`;

export const HeaderItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const IconItem = styled.span`
  color: #fff;
  font-size: 26px;
  cursor: pointer;
`;
