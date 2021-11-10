// select items
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector("nav");
const btnTop = document.querySelector(".btn__top");

//smooth scroll
anchorLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute("href") === "#"
      ? "home"
      : event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// add active class to navbar links
const updateNav = (entries, observer) => {
  const matchingIds = entries
    .filter((e) => e.isIntersecting)
    .map((e) => `#${e.target.id}`);
  //add/remove nav-active class
  if (matchingIds.length !== 0) {
    const current = matchingIds[0];
    navLinks.forEach(function (link) {
      link.classList.remove("nav--active");
      if (link.getAttribute("href") == current) {
        link.classList.add("nav--active");
      }
    });
  }
  //adjust nav padding
  if (matchingIds.includes("#home")) {
    navbar.style.padding = "0 1.5rem 0 0";
    btnTop.classList.remove("btn-top-show");
  } else if (matchingIds.includes("#contato")) {
    navbar.style.padding = "0 0rem 0 1.5rem";
    btnTop.classList.add("btn-top-show");
  } else {
    navbar.style.padding = "0 1.5rem 0 1.5rem";
    btnTop.classList.add("btn-top-show");
  }
};

//intersection observer config
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.66,
};

const observer = new IntersectionObserver(updateNav, options);
document
  .querySelectorAll("*[data-scroll-section]")
  .forEach((el) => observer.observe(el));
