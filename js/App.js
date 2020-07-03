/**
 * Menu
 */

function openNav() {
  document.getElementById("mySidenav").style.width = "90%";
  document.getElementById("mySidenav").style.padding = "30px";
  document.getElementById("background-opacity").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0";
  document.getElementById("background-opacity").style.display = "none";
}

/**
 * Get Mock Products
 */

const Primise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.overrideMimeType("application/json");
    xhr.open("GET", "./utils/mock-products.json", true);

    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

Primise()
  .then(function (response) {
    this.listProduct(response.products);
  })
  .catch(function (error) {
    console.warn(error);
  });

function formatName(name, limit) {
  return name.slice(0, limit) + (name.length > limit ? "..." : "");
}

function formatValue(value) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * List products
 */

function listProduct(products) {
  var ul = document.querySelector(".products");
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
