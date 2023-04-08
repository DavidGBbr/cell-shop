import React, { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";
import { ProductInterface } from "../../types/ProductInterface";
import { BsFillCartDashFill } from "react-icons/bs";
import * as C from "./styles";

// export const Cart = () => {
//   const { getItem, setItem, setCart } = useContext(Context);
//   const [data, setData] = useState<ProductInterface[]>(getItem("phones") || []);

//   const removeItem = (obj) => {
//     const arrFiltered = data.filter((e) => e.id !== obj.id);
//     setData(arrFiltered);
//     setItem("phones", arrFiltered);
//     setCart(arrFiltered);
//   };
//   const subtotal = data.reduce((acc, cur) => acc + cur.price, 0);
//   console.log(subtotal);
//   return (
//     <>
//       <C.SubTotal>
//         SubTotal:{" "}
//         {subtotal.toLocaleString("pt-BR", {
//           style: "currency",
//           currency: "BRL",
//         })}
//       </C.SubTotal>
//       <C.Container>
//         {data.map((product) => {
//           return (
//             <C.CardProduct key={product.id}>
//               <C.ProductTitle>{product.title}</C.ProductTitle>
//               <C.Image src={product.thumbnail} alt={product.title} />
//               <C.Price>
//                 {product.price.toLocaleString("pt-BR", {
//                   style: "currency",
//                   currency: "BRL",
//                 })}
//               </C.Price>
//               <C.Button onClick={() => removeItem(product)}>
//                 <div>
//                   <span>Remover do carrinho</span>
//                   <BsFillCartDashFill />
//                 </div>
//               </C.Button>
//             </C.CardProduct>
//           );
//         })}
//       </C.Container>
//     </>
//   );
// };
