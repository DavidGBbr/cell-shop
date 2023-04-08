import React, { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";
import { ProductInterface } from "../../types/ProductInterface";
import { BsFillCartDashFill } from "react-icons/bs";
import * as C from "./styles";

export const Cart = () => {
  const { getItem, setItem, setCart } = useContext(Context);
  const [data, setData] = useState<ProductInterface[]>(getItem("phones") || []);

  // const removeItem = (obj) => {
  //   const arrFiltered = data.filter((e) => e.id !== obj.id);
  //   setData(arrFiltered);
  //   setItem("phones", arrFiltered);
  //   setCart(arrFiltered);
  // };
  // const subtotal = data.reduce((acc, cur) => acc + cur.price, 0);
  // console.log(subtotal);
  return null;
};
