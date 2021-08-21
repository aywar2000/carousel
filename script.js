
var content = [
    {
        image: "/images/pic2.svg",
        headline: "What is Latana?",
        questions: [
            "How does Latana work?",
            "Why choose Latana?",
            "What does Latana cost?",
        ],
    },
    {
        image: "/images/pic1.svg",
        headline: "Getting Started",
        questions: [
            "What is MRP?",
            "How do you gather data?",
            "What is a margin of error?",
        ],
    },
    {
        image: "/images/pic4.svg",
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

(function () {

//////CONTENT DESRTUCTURING

  console.log("content", content);
  var headlines = [];
  var images =[];
    for (const {headline: h, image: i} of content) {
    headlines.push(h);
    images.push(i);
  };
  console.log("headlines", headlines);
  console.log("images", images);
//

console.log("contetn", content.length);

var carousel = document.getElementById("carousel");

for (let i=0; i < content.length; i++) {
  var newDiv = carousel.appendChild(document.createElement("div"));
  newDiv.className="carousel-unit";
} ///OK!!!!

var newUnits = document.getElementsByClassName("carousel-unit");
console.log("newunits", newUnits);
////
var carouselUnits = Array.from(newUnits);
carouselUnits.forEach(item =>{
  console.log("HELOU", item);
})
// carouselUnits.forEach(item =>{
//     //GETTING HEADLINES
//     var headline = item.appendChild(document.createElement("h4"));
//     let text = document.createTextNode(item);
//     console.log("HEADLINE IN ITEM", headline);
//     })

  //     var headlineArray = document.querySelectorAll("h4");
  //   console.log("hdlnz", headlineArray);
  //   var headlinesArray = Array.from(headlineArray);
  //   console.log("hedlnz 4 real", headlinesArray);

  // headlinesArray.forEach(item=>{
  //         for (let j = 0; j < headlines.length; j++) {
  //    // appending your elements to the body :
  //    let headlineSingle = headlines[j];
  //    console.log("HEADLINE SINGLE", headlineSingle); /// DOBIJEM ELEMENT IZ ARRAY - JEDAN NASLOV
  //    let text = document.createTextNode(headlineSingle);
  //    console.log("TEXT NODE", text);
  //    console.log("TYPEOF", typeof text);
  //    item.appendChild(text);
  //         }
  //       })
 

   carouselUnits.forEach(item =>{
    //GETTING IMAGES OK
    var img = item.appendChild(document.createElement("img"));
    img.className="img";
    for(let a=0; a<images.length; a++) {
      img.src = images[a];
    }
  })

// for(let j = 0; j < carouselUnits.length; j++) {
//     var headline = carouselUnits[j].appendChild(document.createElement("h4"));
//     for (let a=0;i<headlines.length;a++) {
//      // appending your elements to the body :
//      let text = document.createTextNode(headlines[a]);
//      headline.appendChild(text);
//     }
//     return;
//   }

 carouselUnits.forEach(item =>{
    //GETTING HEADLINES
    var headline = item.appendChild(document.createElement("h4"));
    for (let j=0; j<headlines.length; j++) {
     // appending your elements to the body :
     let headlineSingle = headlines[j];
     let text = document.createTextNode(headlineSingle);
     headline.appendChild(text);
    }
    //GETTING IMAGES
    // var img = item.appendChild(document.createElement("img"));
    // img.className="img";
    // for(let a=0; a<images.length; a++) {
    //   img.src = images[a];
    // }
  })


// }
  // var headlines = content.map(item=> {
  //   var headline = document.appendChild(document.createElement("h4"));
  //   let text = document.createTextNode(item.headline);
  //   headline.appendChild(text);
  //   console.log("HDLNZR IZ MAP", headline);
  //   //return item.headline;
    
  // })

  //   var imgSources = content.map(item=> {
  //   return item.image;
  // })
  
  // var carousel = document.getElementById("carousel");
  // var unit = carousel.getElementsByClassName("carousel-unit");
  // function addItems() {
  //   var i = images.length -1;

  //   for(var i = 0; i < unit.length; i++) {
  //     if(i > 0){
  //       for (var j = 0; j < images.length; j++) {

  //       }
  //     }
  //   }
  // }

  ///        https://stackoverflow.com/questions/45960216/insert-array-of-elements-into-the-dom

  // for (let i=0;i<headlines.length;i++) {
  //    // appending your elements to the body :
  //    let text = document.createTextNode(headlines[i]);
  //     let headline = document.createElement("h4");
  //    headline.appendChild(text);
  //    console.log("headline", headline); //  VRAĆA HEADLINES _ OK!!!
  //    //let unit = carousel.querySelectorAll("carousel-unit");
  //    carousel.querySelectorAll("carousel-unit").forEach(item=>{
  //      console.log("unit", item);
  //    })
    //  for(const element of unit) {
    //    console.log("CAROUSELUNITS", element);
    //    element.appendChild(headline).innerHTML;
    //  };
    //  unit.forEach(item => {
    //    item.appendChild(headline);
    //  }).appendChild(headline);
//      console.log("uradiose")
// }

  // for (const element of images) {
  //   console.log("IMAGE LELEMNET", element);
  // }
  // unit.forEach(item => {
  //   var img = item.createElement("img");
  //   images.forEach(item => {
  //     item = img.src;
  //     unit.innerHTML(img);
  //   });
  //   })

  // var img = document.createElement("img");
  // img.alt ="helou";
  // img.src="images[0]";



  var questions = []
  for (const {questions: q} of content) {
    questions.push(q);
  };
  console.log("questionsarray", questions);

  // function getQuestions(questions) {
  //   return questions.map(function(value, index) {
  //     value.forEach = (value) => console.log("EACH?", value)
  //   })
  // }

  function getQuestions(arr) {
    for(i=0; i<questions.length; i++) {
      console.log("GETQUESTIONS", questions[i])
      return questions[i];
    }
  }
  getQuestions(questions);

  var list = document.createElement('li');
  // var sub = questions.forEach( sub => {
  //   return sub;
  // })
   
  //var questz = questions.forEach(([key, value]) => console.log("questions arrays", key, value));
  
  questions.map(function(value, index){
      //return `<li key={ index }>{value}</li>`;
      console.log("EHJOU", index, value);
      })

    //document.getElementById('carousel').innerHTML = questz;
///   https://stackoverflow.com/questions/50782855/looping-through-an-array-of-arrays/50782883

  // list.innerHTML = array;
  // list.classList.add("questions");
  // var unit = document.querySelectorAll("carousel-unit");
  // unit.forEach(item => {
  //   item.innerHTML(list);
  // })
  //carousel.appendChild(list);
  // questions.forEach(sub => {
  //   console.log("sub", sub);
  //   for (i=0; i<sub.length; i++) {
  //     console.log("i", sub[i]);
    
  //   }
  //   const item = document.createElement('li');
  //   item.innerHTML = sub;
  //   item.classList.add("questions");
  //   var carousel = document.getElementById("carousel");
  //   carousel.appendChild(item);
  // });


///ALT NAČIN ____ Object.keys(ray).forEach(k => ray[k].forEach(e => doSomethingWith(k,e))) ray je u mom content

var carousel = document.getElementById("carousel");
// var unit = document.createElement("div");
// unit.classList.add("carousel-unit");
// carousel.appendChild(unit);
// ///
// headlines.forEach(function(item) {
//   var headline = document.createElement("h4");
//   var text = document.createTextNode(item);
//   headline.appendChild(text);
//   unit.appendChild(headline);
// });

///DESTRUKTURIRATI CONTENT???

//PROBA NOVO
// function createColumns(headlines) {
//   let unit = [];
//   headlines.map(item => {
//     unit.push(`
       
//         <div class="carousel-unit">
//           <h4>${item}</h4>
//         </div>
           
//       `);
//   });
//   return unit;
// }

// document.getElementById('carousel').innerHTML = createColumns(headlines).join('');

//////////

/////////////////////////

////////////////////////////////////////////


  var item = document.querySelectorAll(".carousel-unit");
  var i = 0;
  var isTransitioning = false;
  var timerId;
  var dots = document.querySelectorAll(".dot");

  function moveItems(index) {
    item[i].classList.remove("onscreen");
    //dots[i].classList.remove("on");
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
    dots[i].classList.add("on");
    isTransitioning = true;
  }

  //NEŠTO ZA DISPLAY 
  // if(document.getElementsByClassName("carousel-item").length === 3) {
  //   setwidth, itd
  // } else if (length === 2) {

  // }

  // function moveImg(index) {
  //   images[i].classList.remove("onscreen");
  //   dots[i].classList.remove("on");
  //   images[i].classList.add("offscreen");
  //   if (i < images.length - 1) {
  //     i++;
  //   } else {
  //     i = 0;
  //   }
  //   if (typeof index === "number") {
  //     i = index;
  //   } else {
  //     i;
  //   }
  //   images[i].classList.add("onscreen");
  //   dots[i].classList.add("on");
  //   isTransitioning = true;
  // }

  //timerId = setTimeout(moveImg, 3000);

  var right = document.getElementById("right");
  
  right.addEventListener("click", function() {
    var units = document.getElementsByClassName("carousel-unit");
    for (i=0; i < units.length; i++) {
      units[0].classList.add("offscreen");
      units[1].classList.add("onscreen");
    }
  }),
  


  document.addEventListener("transitionend", function (e) {
    var a = e.target.className;
    if (a == "offscreen") {
      e.target.classList.remove("offscreen");
      //timerId = setTimeout(moveImg, 3000);
      isTransitioning = false;
    }
  });
  for (var x = 0; x < dots.length; x++) {
    (function (index) {
      dots[index].addEventListener("click", function () {
        if (i == index || isTransitioning == true) {
          return;
        }
        moveItems(index);
        clearTimeout(timerId);
      });
    })(x);
  }
})();
