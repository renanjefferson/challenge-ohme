import formatValue from "../utils/formatValue";
import formatName from "../utils/formatName";

export default function listProducts(products) {
  let ul = document.querySelector(".products");

  products.map(
    (product) =>
      (ul.innerHTML += `<li class="product">
        <a href="#"
          ><img
            src="${product.image}"
            alt="${product.name}"
        /></a>
        <div class="product-inf">
          <h3 class="product-title">${formatName(product.name, 18)}</h3>
          <p class="product-price">${formatValue(product.price)}</p>
        </div>
      </li>`)
  );
}
