import { useEffect, useState } from "react";
import { getProducts } from "./services/APIcalls";
import { Product } from "./declaretion";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const ProductDisplay = styled.div`
  padding: 10px;
  gap: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

function App() {
  const [products, setProducts] = useState<null | Product[]>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products) {
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  if (!products) return <div>Loading</div>;
  return (
    <div id="container">
      <Navbar cart={cart}></Navbar>
      <ProductDisplay>
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ProductDisplay>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet
        quas temporibus repellendus quidem, quam voluptate animi quis, tempora
        dignissimos maiores sint, ipsa beatae? Suscipit distinctio modi ratione
        in qui!
      </footer>
    </div>
  );
}
export default App;
