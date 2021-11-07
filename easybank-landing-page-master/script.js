document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const navbar = document.getElementsByClassName("navbar")[0];
  const closedHamburger = document.getElementsByClassName("closed")[0];
  const cover = document.getElementById("cover");

  function noscroll() {
    window.scrollTo(0, 0);
  }

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    closedHamburger.classList.toggle("closed");
    hamburger.classList.toggle("closed");
    cover.classList.toggle("covering");
    window.addEventListener("scroll", noscroll);
  });

  closedHamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    closedHamburger.classList.toggle("closed");
    hamburger.classList.toggle("closed");
    cover.classList.toggle("covering");
    window.removeEventListener("scroll", noscroll);
  });
});
