export default function typeSortBy(products, sortBy) {
  let ul = document.querySelector(".products");

  switch (sortBy) {
    case "price-desc":
      ul.innerHTML = "";

      return (products = products.sort((a, b) => b.price - a.price));

    case "price-asc":
      ul.innerHTML = "";

      return (products = products.sort((a, b) => a.price - b.price));

    case "name-desc":
      ul.innerHTML = "";

      return (products = products.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      }));

    case "name-asc":
      ul.innerHTML = "";

      return (products = products.sort((a, b) => {
        if (a.name > b.name) return -1;
        else if (a.name < b.name) return 1;
        return 0;
      }));

    default:
      break;
  }
}
