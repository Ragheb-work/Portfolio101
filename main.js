// Page Preloader

// Page Preloader

// Scroll To Top btn
let scrollBtn = document.querySelector(".scroll");
scrollBtn.addEventListener("click", () => {
  window.scrollTo(top);
});

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
});
// Scroll To Top btn
