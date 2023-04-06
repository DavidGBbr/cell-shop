import React, { useContext } from "react";
import { ProductInterface } from "../../types/ProductInterface";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { Context } from "../../Contexts/Context";

export const Product = (dataProduct: ProductInterface) => {
  const { cart, handleClick } = useContext(Context);
  return (
    <div key={dataProduct.id}>
      <h1>{dataProduct.title}</h1>
      <img src={dataProduct.thumbnail} alt="" />
      <h3>{dataProduct.price}</h3>
      <button onClick={() => handleClick(dataProduct)}>
        {cart.some((itemCart) => itemCart.id === dataProduct.id) ? (
          <BsFillCartCheckFill />
        ) : (
          <BsFillCartPlusFill />
        )}
      </button>
    </div>
  );
};
