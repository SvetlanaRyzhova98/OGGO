(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 110) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();
(function () {
  const burgerBtn = document.querySelector(".header__burger-btn");
  const body = document.querySelector("body");
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger__btn-active");
    body.classList.toggle("overflow");
  });
})();

(function () {
  const productBtn = document.querySelector(".product__btn-more");
  productBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const productCards = document.querySelectorAll(".product__card.hidden");

    for (const productCart of productCards) {
      productCart.classList.remove("hidden");
    }
  });
})();
(function () {
  const productBtnMax = document.querySelector(".product__btn-max");
  const productText = document.querySelector(".product__text");
  productBtnMax.addEventListener("click", (event) => {
    event.preventDefault();
    productText.classList.remove("product__text");
  });
})();
