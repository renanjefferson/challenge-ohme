import logo from "../assets/logo.svg";
import { openNav, closeNav } from "./menu";
import mock from "../utils/mock-products.json";
import listProducts from "./list";
import typeSortBy from "./sortBy";

import "../styles/main.scss";

document.querySelector(
  ".logo"
).innerHTML = `<img src="${logo}" alt="Ohme" title="Ohme" />`;

document.querySelector(
  ".logo-mobile"
).innerHTML = `<img src="${logo}" alt="Ohme" title="Ohme" />`;

let products = mock.products;
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const sortByElement = document.querySelector(".sort-by");

openMenu.addEventListener("click", function () {
  openNav();
});

closeMenu.addEventListener("click", function () {
  closeNav();
});

sortByElement.addEventListener("change", (event) => {
  let newArrayProducts = typeSortBy(products, event.target.value);
  listProducts(newArrayProducts);
});

let newArrayProducts = typeSortBy(products, "price-desc");
listProducts(newArrayProducts);
