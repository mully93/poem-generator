function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Come away o human child",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
