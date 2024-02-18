export interface User {
  id: string;
  isActive: boolean;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  cart: Product[];
  orders: Order[];
}

export interface Users {
  [key: User["id"]]: User;
}
export type UserLogged = Omit<User, "password" | "isActive"> | null;
export interface Product {
  id: string;
  storeId: string;
  clientId: string;
  externalId: null | string;
  title: string;
  description: string;
  previewUrl: string;
  externalPreviewUrl: string;
  externalThumbnailUrl: string;
  isReadyToPublish: boolean;
  publishedAt: null | string;
  createdAt: string;
  updatedAt: string;
  category: string;
  previewFileType: string;
  productVariantPreviewScene: string;
  variants: Variants[];
  productVariantOptions: productVariantOptions[];
}
export interface Variants {
  id: string;
  clientId: string;
  productId: string;
  title: string;
  externalId: null | string;
  connectionStatus: "connected" | "not_connected" | "ignored";
}
export interface productVariantOptions {
  name: string;
  values: string[];
}
export interface Order {
  id: string;
  date: Date;
  products: Product[];
  state: "pending" | "shipped" | "delivered" | "cancelled";
}
export interface Products {
  [key: Product["id"]]: Product;
}
