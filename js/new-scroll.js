document.addEventListener("scroll", function addColor() {
  const navWrap = document.querySelector(".sticky-wrapper");
  if (window.scrollY > 45) {
    navWrap.classList.add("navbar-color");
  } else {
    navWrap.classList.remove("navbar-color");
  }
});
