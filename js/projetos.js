const slides = [
  {
    id: 1,
    img: "https://res.cloudinary.com/fcherini/image/upload/v1634560883/trouble-store_ozfngq.png",
    title: "TROUBLE STORE",
    description: "Loja de roupas feita em React",
    tecnologies: "HTML | SCSS | REACT.JS ",
    live: "https://github.com",
    github: "https://github.com/fcherini/trouble-store",
    figma: "https://www.figma.com/file/ELfYwYS3K754i4AsOcwwi0/Trouble-store",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/fcherini/image/upload/v1634560882/freshii-food_f1dsfh.png",
    title: "FRESHII REFEIÇÕES",
    description: "Site para refeições pré-preparadas",
    tecnologies: "HTML | CSS | JQUERY",
    live: "https://fcherini.github.io/Freshii-comida/",
    github: "https://github.com/fcherini/Freshii-comida",
    figma: "https://www.figma.com/file/ATMglKNbcEFcC5iWfF6gLG/Freshii-Comida",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/fcherini/image/upload/v1634560882/couple-therapist_bqsbg7.png",
    title: "COUPLE'S THERAPIST SITE",
    description: "Um site para uma terapista de casal em inglês",
    tecnologies: "HTML | CSS | BOOTSTRAP | JS PURO",
    live: "https://fcherini.github.io/couple-therapist/",
    github: "https://github.com/fcherini/couple-therapist",
    figma:
      "https://www.figma.com/file/2cDnAOWutxB29XExOh2RXw/Couples-Counselor-Website-Bootstrap",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/fcherini/image/upload/v1634560882/resume_zmdr4k.png",
    title: "SITE PESSOAL",
    description: "Site currículo para demonstrar os projetos",
    tecnologies: "HTML | SCSS | JS PURO",
    live: "https://fcherini.netlify.app/",
    github: "https://github.com/fcherini/Curriculo-Website",
    figma:
      "https://www.figma.com/file/8VsjiDxSuN8nMVDEmcjLTU/Resume-Personal-Website",
  },
];

//select items
const img = document.querySelector(".project__img");
const title = document.querySelector(".project__title");
const description = document.getElementById("project__description");
const tecnologies = document.getElementById("project__tecnologies");
const live = document.getElementById("live");
const github = document.getElementById("github");
const figma = document.getElementById("figma");

const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

const indicators = document.querySelectorAll(".project__circle");

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", () => {
  let item = slides[currentItem];
  img.src = item.img;
  title.textContent = item.title;
  description.textContent = item.description;
  tecnologies.textContent = item.tecnologies;
  live.href = item.live;
  github.href = item.github;
  figma.href = item.figma;
  console.log(img);
});

//show slide based on item and change indicator
function showSlide(slide) {
  const item = slides[slide];
  img.src = item.img;
  title.textContent = item.title;
  description.textContent = item.description;
  tecnologies.textContent = item.tecnologies;
  live.href = item.live;
  github.href = item.github;
  figma.href = item.figma;

  indicators.forEach((circle) => {
    circle.classList.remove("project__circle--active");
    if (circle.id == item.id) {
      circle.classList.add("project__circle--active");
    }
  });
}

//show next slide
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > slides.length - 1) {
    currentItem = 0;
  }
  showSlide(currentItem);
});

//show previous slide
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = slides.length - 1;
  }
  showSlide(currentItem);
});
