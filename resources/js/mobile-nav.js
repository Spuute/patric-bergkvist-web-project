"use strict";

(function navigationSlide() {
  const responsiveMenu = document.querySelector(".mobile-menu");
  const navigation = document.querySelector(".main-navigation");

  responsiveMenu.addEventListener("click", () => {
    navigation.classList.toggle("mobile-nav-active");
  });
})();
