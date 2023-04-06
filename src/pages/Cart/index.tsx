import React, { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";
import { ProductInterface } from "../../types/ProductInterface";

import { BsFillCartDashFill } from "react-icons/bs";

export const Cart = () => {
  const { getItem, setItem } = useContext(Context);
  const [data, setData] = useState<ProductInterface[]>(getItem("phones") || []);

  const removeItem = (obj) => {
    const arrFiltered = data.filter((e) => e.id !== obj.id);
    setData(arrFiltered);
    setItem("phones", arrFiltered);
  };
  return (
    <>
      <h1>Carrinho</h1>
      <div>
        {data.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.price}</h4>
              <button onClick={() => removeItem(product)}>
                <BsFillCartDashFill />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
