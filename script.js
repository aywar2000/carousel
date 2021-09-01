var content = [
  {
    image: "latana task/latana1",
    headline: "What is Latana?",
    questions: [
      "How does Latana work?",
      "Why choose Latana?",
      "What does Latana cost?",
    ],
  },
  {
    image: "latana task/latana2",
    headline: "Getting Started",
    questions: [
      "What is MRP?",
      "How do you gather data?",
      "What is a margin of error?",
    ],
  },
  {
    image: "latana task/latana3",
    headline: "Using Latana",
    questions: [
      "How to use Latana?",
      "What is the Brand Funnel?",
      "How to interpret Brand Tracking Data?",
    ],
  },
  {
    image: "latana task/latana4",
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
    let unit = carousel.getElementsByClassName("carousel-unit");
    var carouselUnits = Array.from(unit);

    for (let i = 0; i < content.length; i++) {
      // Image
      let image = document.createElement("img");
      image.className = "img";
      image.src = content[i].image;
      carouselUnits[i].appendChild(image);

      //Headlines
      let title = document.createElement("h4");
      let headlineText = document.createTextNode(content[i].headline);
      title.appendChild(headlineText);
      title.classList = "headline";
      let headline = carouselUnits[i].appendChild(title);
      carouselUnits[i].appendChild(headline);

      // Questions
      let questionsList = document.createElement("ul");
      for (let j = 0; j < content[i].questions; j++) {
        console.log("QWZ", questions[j]);
      }
      let questionText = document.createTextNode(content[i].questions);
      console.log("questions", content[i].questions);
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

///////

(function () {
  var carousel = new Carousel();
  carousel.run();

  var units = document.getElementsByClassName("carousel-unit");
  var unitsLength = units.length;
  //var lastElement = unitsLength - 1;
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
    units[slidePosition].classList.add("onscreen");
    units[0].classList.add("moveToLast");
    // if ((slidePosition = unitsLength - 1)) {
    //   units[slidePosition].classList.add("blur");
    // }
  }
  function prevSlide() {
    if (slidePosition === 0) {
      slidePosition = unitsLength - 1;
    } else {
      slidePosition--;
    }
    units[slidePosition].classList.add("prev");
    units[slidePosition].classList.add("onscreen");
    units[unitsLength - 1].classList.add("moveToFirst");
  }
  next.addEventListener("click", nextSlide, true);
  prev.addEventListener("click", prevSlide);
  document.addEventListener("transitionend", function (event) {
    if (
      event.target.classList.contains("next") ||
      event.target.classList.contains("prev")
    ) {
      inTransit = false;
      event.target.classList.remove("next");
    }
  });
})();
