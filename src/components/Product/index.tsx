import React, { useContext } from "react";
import { ProductInterface } from "../../types/ProductInterface";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { Context } from "../../Contexts/Context";
import * as C from "./styles";

export const Product = (dataProduct: ProductInterface) => {
  const { cart, handleClick } = useContext(Context);
  return (
    <C.CardProduct key={dataProduct.id}>
      <C.Image src={dataProduct.thumbnail} alt="" />

      <C.ProductTitle>{dataProduct.title}</C.ProductTitle>
      <C.Price>
        {dataProduct.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </C.Price>
      {/* <C.Button onClick={() => handleClick(dataProduct)}>
        {cart.some((itemCart) => itemCart.id === dataProduct.id) ? (
          <div>
            <span>Remover do carrinho</span>
            <C.CartIcon>
              <BsFillCartCheckFill />
            </C.CartIcon>
          </div>
        ) : (
          <div>
            <span>Adicionar ao carrinho</span>
            <C.CartIcon>
              <BsFillCartPlusFill />
            </C.CartIcon>
          </div>
        )}
      </C.Button> */}
    </C.CardProduct>
  );
};
