import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { ProductInterface } from "../../types/ProductInterface";
import { Context } from "../../Contexts/Context";
import { ContainerProducts } from "./styles";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const Store = () => {
  const { cart, setCart } = useContext(Context);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    setLoading(true);
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const response = await fetch(url);
    const json = await response.json();
    setLoading(false);
    setProducts(json.results);
  };

  return (
    <>
      {loading && <LoadingIndicator />}
      {!loading && (
        <ContainerProducts>
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
        </ContainerProducts>
      )}
    </>
  );
};
