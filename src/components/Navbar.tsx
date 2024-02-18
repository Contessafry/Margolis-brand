/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { Product } from "../declaretion";
import CartDrawer from "./CartDrawer";
interface NavProps {
  cart: Product[];
}
const NavWrapper = styled.nav`
  width: 100%;
  padding: 5px;
  box-shadow: 0px 5px 6px 1px #1d1c1c;
  display: flex;
  height: 10vh;
  background-color: #590659;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60vw;
  }
  button {
    background-color: #242424;
  }
`;

function NavBar({ cart }: NavProps) {
  return (
    <NavWrapper>
      <h1>Margolis</h1>
      <ul>
        <li>Home</li>
        <li>T-Shirts</li>
        <li>Hoodies</li>
        <li>Contacts</li>
        <li>About</li>
      </ul>
      <CartDrawer cart={cart} />
    </NavWrapper>
  );
}
export default NavBar;
