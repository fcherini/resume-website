//select elements
const qualificationText = document.querySelectorAll(".qualification__text");
const qualificationCircles = document.querySelectorAll(
  ".qualification__circle"
);

//hover functionality
qualificationText.forEach((text) => {
  text.addEventListener("mouseover", function (e) {
    //remove active class from all circles
    qualificationCircles.forEach((eachCircle) => {
      eachCircle.classList.remove("qualification__circle--active");
    });
    //add active class only to one item
    const currentId = e.target.id;
    Array.from(qualificationCircles).filter((circle) => {
      if (currentId === circle.id) {
        circle.classList.add("qualification__circle--active");
      }
    });
  });
});
