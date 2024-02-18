import styled from "styled-components";
import { Product } from "../declaretion";

interface CardProps {
  product: Product;
  addToCart: (product: Product) => void;
}
const CardWrapper = styled.div`
  box-shadow: 0px 20px 6px 6px #1d1c1c;
  border-radius: 40px;
  padding: 25px;
  width: 25vw;
  /* height: 62vh; */
  background-color: #1a1a1a;
`;

function Card({ product, addToCart }: CardProps) {
  const {
    id,
    title,
    description,
    previewUrl,
    externalPreviewUrl,
    productVariantOptions,
  } = product;

  return (
    <CardWrapper key={id}>
      <img style={{ width: "100%" }} src={previewUrl} alt={title} />
      <h1>{title}</h1>
      <p style={{ display: "none" }}>{description}</p>
      <p>{externalPreviewUrl}</p>
      <p>{!!productVariantOptions[0] && productVariantOptions[0].values}</p>
      <p>{!!productVariantOptions[1] && productVariantOptions[1].values}</p>
      <p>PRICE</p>{" "}
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </CardWrapper>
  );
}
export default Card;
