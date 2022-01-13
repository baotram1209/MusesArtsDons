"use strict";

const goUp = document.querySelector("#go-up");

goUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
