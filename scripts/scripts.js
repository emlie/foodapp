var products = document.getElementById("products");



window.onload = function showProducts() {
  console.log("testing showProducts");

  products.innerHTML += `
  <div class="img1">
    <img src="images/kawaii-drinks/svg/004-tomato-juice.svg" alt="tomato juice">
  </div>
  `;
};
