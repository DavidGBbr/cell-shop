import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { ProductInterface } from "../../types/ProductInterface";
import { Context } from "../../Contexts/Context";
import { Link } from "react-router-dom";

export const Store = () => {
  const { cart, setCart } = useContext(Context);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const response = await fetch(url);
    const json = await response.json();
    setProducts(json.results);
  };

  return (
    <>
      <h1>Store</h1>
      <Link to="/cart">Carrinho</Link>
      {products.length &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
    </>
  );
};
