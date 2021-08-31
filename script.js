console.log("xOxOxOx");
var content = [
  {
    image: "C:UsersKorisnikDesktoplatana tasklatana1.png",
    headline: "What is Latana?",
    questions: [
      "How does Latana work?",
      "Why choose Latana?",
      "What does Latana cost?",
    ],
  },
  {
    image: "C:UsersKorisnikDesktoplatana tasklatana2.png",
    headline: "Getting Started",
    questions: [
      "What is MRP?",
      "How do you gather data?",
      "What is a margin of error?",
    ],
  },
  {
    image: "C:UsersKorisnikDesktoplatana tasklatana1.png",
    headline: "Using Latana",
    questions: [
      "How to use Latana?",
      "What is the Brand Funnel?",
      "How to interpret Brand Tracking Data?",
    ],
  },
  {
    image: "/images/pic3.svg",
    headline: "Data collection & Methodology",
    questions: [
      "What is MRP?",
      "How do you gather data?",
      "What is a margin of error?",
    ],
  },
];

class Carousel {
  constructor() {
    const carousel = document.getElementById("carousel");
    for (let i = 0; i < content.length; i++) {
      var newDiv = carousel.appendChild(document.createElement("div"));
      newDiv.classList = "carousel-unit";
    }
  }

  run() {
    let cell = carousel.getElementsByClassName("carousel-unit");
    var carouselUnits = Array.from(cell);

    for (let i = 0; i < content.length; i++) {
      //Headlines
      let title = document.createElement("h4");
      let headlineText = document.createTextNode(content[i].headline);
      title.appendChild(headlineText);
      title.classList = "headline";
      let headline = carouselUnits[i].appendChild(title);
      carouselUnits[i].appendChild(headline);

      // Image
      let image = document.createElement("img");
      image.className = "img";
      image.src = content[i].image;
      carouselUnits[i].appendChild(image);

      // Questions
      let questionsList = document.createElement("ul");
      let questionText = document.createTextNode(content[i].questions);
      questionsList.appendChild(questionText);
      questionsList.classList = "questions";
      let questions = carouselUnits[i].appendChild(questionsList);
      carouselUnits[i].appendChild(questions);

      //Buttons
      let button = document.createElement("button");
      button.classList = "button";
      button.textContent = "Learn more";
      carouselUnits[i].appendChild(button);
    }
  }
}

(function () {
  var carousel = new Carousel();
  carousel.run();

  var units = document.getElementsByClassName("carousel-unit");
  var unitsLength = units.length;
  console.log(unitsLength);
  var inTransit;
  // var i = 0;
  let slidePosition = 0;
  var next = document.getElementById("right");
  var prev = document.getElementById("left");

  function nextSlide() {
    if (slidePosition === unitsLength - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    inTransit = true;
    units[slidePosition].classList.add("next");
    units[0].classList.add("moveToLast");
  }
  function prevSlide() {
    if (slidePosition === 0) {
      slidePosition = unitsLength - 1;
    } else {
      slidePosition--;
    }
    units[slidePosition].classList.add("prev");
    units[unitsLength - 1].classList.add("moveToFirst");
  }
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
  document.addEventListener("transitionend", function (event) {
    if (event.target.classList.contains("next")) {
      inTransit = false;
      event.target.classList.remove("next");
    }
  });
})();
