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
  name: string;
  description: string;
  price: number;
  covers: string[];
  category: string;
  sizes: string[];
  colors: string[];
}
export interface Products {
  [key: Product["id"]]: Product;
}

export interface Order {
  id: string;
  date: Date;
  products: Product[];
  state: "pending" | "shipped" | "delivered" | "cancelled";
}
