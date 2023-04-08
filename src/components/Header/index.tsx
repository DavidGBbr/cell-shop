import React, { useState } from "react";
import * as C from "./styles";
import {
  FaMobileAlt,
  FaSearch,
  FaHeart,
  FaCartPlus,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <C.Header>
      <C.Sale className="sale">Frete grátis para todo o Brasil</C.Sale>

      <C.HeaderContainer>
        <Link to="/">
          <C.HeaderIcon>
            <FaMobileAlt />
          </C.HeaderIcon>
        </Link>

        <C.HeaderSearch>
          <C.Input type="text" placeholder="Estou procurando..." />
          <C.SearchBtn>
            <C.SearchIcon>
              <FaSearch />
            </C.SearchIcon>
          </C.SearchBtn>
        </C.HeaderSearch>

        <nav>
          <C.HeaderItems>
            <Link to="/">
              <C.IconItem className="hide-mobile">
                <FaHeart />
              </C.IconItem>
            </Link>
            <Link to="/cart">
              <C.IconItem>
                <FaCartPlus />
              </C.IconItem>
            </Link>
            <Link to="/">
              <C.IconItem className="hide-mobile">
                <FaBell />
              </C.IconItem>
            </Link>
          </C.HeaderItems>
        </nav>
      </C.HeaderContainer>
    </C.Header>
  );
};
