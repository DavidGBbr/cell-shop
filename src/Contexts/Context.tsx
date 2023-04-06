import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ItemType = {
  id: number;
  name: string;
  price: number;
};

type ContextType = {
  cart: ItemType[];
  setCart: Dispatch<SetStateAction<ItemType[]>>;
  handleClick: (obj: ItemType) => void;
};

const initialState: ContextType = {
  cart: [],
  setCart: () => {},
  handleClick: () => {},
};

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [cart, setCart] = useState<ItemType[]>(getItem("phones") || []);

  const handleClick = (obj: ItemType): void => {
    const product = cart.find((e) => e.id === obj.id);
    if (product) {
      const arrFiltered = cart.filter((e) => e.id !== obj.id);
      setCart(() => {
        setItem("phones", arrFiltered);
        return arrFiltered;
      });
    } else {
      const newCart = cart.concat(obj);
      setCart(() => {
        setItem("phones", newCart);
        return newCart;
      });
    }
  };

  return (
    <Context.Provider value={{ cart, setCart, handleClick, getItem, setItem }}>
      {children}
    </Context.Provider>
  );
};
