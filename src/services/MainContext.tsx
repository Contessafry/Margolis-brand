import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../declaretion";
import { productPricer } from "../utilities/productPricer";
import { getProducts } from "./APIcalls";

export interface AppContextType {
  products: null | Product[];
  setProducts: React.Dispatch<React.SetStateAction<null | Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
}
interface Props {
  children: ReactNode;
}

// Definisci un valore di default che corrisponde a AppContextType
const defaultContextValue: AppContextType = {
  products: null,
  setProducts: () => {},
  cart: [],
  setCart: () => {},
  addToCart: () => {},
};

// Usa il valore di default quando crei il contesto
export const AppContext = createContext<AppContextType>(defaultContextValue);

const MainContext = ({ children }: Props) => {
  const [products, setProducts] = useState<null | Product[]>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products) {
        products.map((product: Product) => productPricer(product));
        setProducts(products);
        console.log(products);
      }
    };
    fetchProducts();
  }, []);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  return (
    <AppContext.Provider
      value={{ products, setProducts, cart, setCart, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MainContext;
