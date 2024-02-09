/* eslint-disable no-extra-boolean-cast */
import { v4 as uuidv4 } from "uuid";
import {
  Order,
  Product,
  Products,
  User,
  UserLogged,
  Users,
} from "./declaretion";
uuidv4();
export class EcomClass {
  userLogged: UserLogged = null;
  users: Users = {};
  products: Products = {};

  login({ email, password }: { email: string; password: string }) {
    if (!!this.userLogged) throw new Error("User already logged");
    const userExist = Object.values(this.users).find(
      (user) => user.email === email && user.password === password
    );
    if (!!userExist) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, isActive, ...userLogged } = userExist;
      this.userLogged = userLogged;
    } else {
      const newUser: User = {
        id: uuidv4(),
        isActive: true,
        name: "",
        lastName: "",
        email,
        password,
        phone: "",
        address: {
          street: "",
          city: "",
          state: "",
          zip: "",
        },
        cart: [],
        orders: [],
      };
      this.users[newUser.id] = newUser;
    }
  }
  logOut() {
    this.userLogged = null;
  }
  addProductToCart(product: Product) {
    if (!this.userLogged) throw new Error("User not logged");
    this.userLogged.cart = [...this.userLogged.cart, product];
    this.users[this.userLogged.id].cart = this.userLogged.cart;
  }
  removeProductFromCart(id: Product["id"]) {
    if (!this.userLogged) throw new Error("User not logged");
    this.userLogged.cart = this.userLogged.cart.filter(
      (product) => product.id !== id
    );
    this.users[this.userLogged.id].cart = this.userLogged.cart;
  }
  cartToOrder() {
    if (!this.userLogged) throw new Error("User not logged");
    if (!this.userLogged.cart.length) throw new Error("Cart empty");
    const order: Order = {
      id: uuidv4(),
      date: new Date(),
      products: this.userLogged.cart,
      state: "pending",
    };
    this.userLogged.orders = [...this.userLogged.orders, order];
    this.users[this.userLogged.id].orders = this.userLogged.orders;
    this.userLogged.cart = [];
    this.users[this.userLogged.id].cart = this.userLogged.cart;
  }
}
