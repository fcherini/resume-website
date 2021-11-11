const slides = [
  {
    id: 1,
    img: "https://res.cloudinary.com/fcherini/image/upload/v1634560883/trouble-store_ozfngq.png",
    title: "TROUBLE STORE",
    description: "Loja de roupas feita em React",
    tecnologies: "HTML | SCSS | REACT.JS ",
    live: "https://trouble-store.netlify.app",
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
    tecnologies: "HTML | CSS | BOOTSTRAP | VANILLA JS",
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
    tecnologies: "HTML | SCSS | VANILLA JS",
    live: "https://fernanda-cherini.netlify.app/",
    github: "https://github.com/fcherini/resume-website",
    figma:
      "https://www.figma.com/file/8VsjiDxSuN8nMVDEmcjLTU/Resume-Personal-Website",
  },
];

//select elements
const container = document.querySelector(".project__container");
const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");
const indicators = document.querySelectorAll(".project__circle");

//add items from slides to the container
container.innerHTML = slides
  .map((slide, slideIndex) => {
    const { id, img, title, description, tecnologies, live, github, figma } =
      slide;

    //change class based on position
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === slides.length - 1) {
      position = "last";
    }
    return `<div class="slide ${position}" id="${id}">
            <img
              src="${img}"
              alt="${title}"
              class="project__img"
            />
            <div class="project__texts">
              <h5 class="project__title">${title}</h5>
              <div class="project__details">
                <h6 class="project__subtitle">DESCRIÇão</h6>
                <p class="project__description" id="project__description">
                  ${description}
                </p>
              </div>
              <div class="project__tecnologies">
                <h6 class="project__subtitle">TECNOLOGIAS</h6>
                <p class="project__description" id="project__tecnologies">
                  ${tecnologies}
                </p>
              </div>
              <ul class="project__links">
                <li>versão <a href="${live}" id="live" target="_blank">live</a></li>
                <li>
                  código no <a href="${github}" id="github" target="_blank">github</a>
                </li>
                <li>
                  design no <a href="${figma}" id="figma" target="_blank">figma</a>
                </li>
              </ul>
            </div>
          </div>`;
  })
  .join("");

//slide functionality
const showSlide = (type) => {
  //select elements
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  //back to first slide
  if (!next) {
    next = container.firstElementChild;
  }

  //remove classes
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    //prevBtn functionality
    active.classList.add(["next"]);
    last.classList.add(["active"]);
    next.classList.add(["last"]);
  } else {
    //nextBtn functionality
    active.classList.add(["last"]);
    last.classList.add(["next"]);
    next.classList.add(["active"]);
  }

  //circle indicators
  indicators.forEach((circle) => {
    circle.classList.remove("project__circle--active");
    if (circle.id === next.id) {
      circle.classList.add("project__circle--active");
    }
  });
};

//swipe library
const hammertime = new Hammer(container);

//event listeners
nextBtn.addEventListener("click", showSlide);
prevBtn.addEventListener("click", () => showSlide("prev"));
hammertime.on("swiperight", showSlide);
hammertime.on("swipeleft", () => showSlide("prev"));
