import { Product } from "../declaretion";

export function productPricer(product: Product) {
  switch (!product.price) {
    case product.title.includes("T-shirt"): {
      return (product.price = 34.99);
    }
    case product.title.includes("Hoodie"): {
      return (product.price = 59.99);
    }
    default: {
      return (product.price = 404);
    }
  }
}
