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

  //////////
  var item = document.querySelectorAll(".carousel-unit");
  var i = 0;
  var isTransitioning = false;

  function moveItems(index) {
    item[i].classList.remove("onscreen");
    item[i].classList.add("offscreen");
    if (i < item.length - 1) {
      i++;
    } else {
      i = 0;
    }
    if (typeof index === "number") {
      i = index;
    } else {
      i;
    }
    item[i].classList.add("onscreen");
    isTransitioning = true;
  }

  //NEŠTO ZA DISPLAY
  // if(document.getElementsByClassName("carousel-item").length === 3) {
  //   setwidth, itd
  // } else if (length === 2) {

  // }

  var right = document.getElementById("right");

  right.addEventListener("click", function () {
    var units = document.getElementsByClassName("carousel-unit");
    for (i = 0; i < units.length; i++) {
      units[0].classList.add("offscreen");
      units[1].classList.add("onscreen");
      units[2].classList.add("onscreen");
      units[3].classList.add("onscreen");
    }
  }),
    document.addEventListener("transitionend", function (e) {
      var a = e.target.className;
      if (a == "offscreen") {
        e.target.classList.remove("offscreen");
        isTransitioning = false;
      }
    });
})();
