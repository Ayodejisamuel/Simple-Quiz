/** @format */

// /** @format */

// // /** @format */

// // // alert("Hello World");

// // create countdown timings
const countdownEl = document.getElementById("countdown");
const startingTime = 105;
let time = startingTime * 60;
document.getElementById("start").addEventListener("click", function () {
  setInterval(function () {
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor(time / 60) % 60;
    let seconds = time % 60;

    countdownEl.innerHTML = hours + " : " + minutes + " : " + seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (time < 0) {
      countdownEl.innerHTML = "TIME EXPIRED";
    }
    time--;
  }, 1000);
});

// // Storing questions in an Array.

var i = 0;
// var userChoices = document.getElementsByTagName("[input");
// document.getElementById("disp").innerHTML = questiions[i ];
var questions = [
  {
    id: 0,
    question: "Which of the following is not a product of Google?",
    options: ["Youtube", "Gmail", "Netflix", "Google Drive"],
    answer: "2",
  },

  {
    id: 1,
    question: " which of the following is not an area in Ibadan",
    options: ["Iwo road", "Gbagi", "Lekki", "Ojoo"],
    answer: 2,
  },

  {
    id: 2,
    question: "What is the capital of Nigeria",
    options: ["Ibadan", "Enugu", "Lagos", "Akwa-Ibom"],
    answer: 2,
  },

  {
    id: 3,
    question: "Who is the President Of Nigeria?",
    options: [
      "Aliko Dangote",
      "Yemi Osinbajo",
      "Faleye Ayodeji",
      "Muhammudu Buhari",
    ],
    answer: 3,
  },
];

// //loop through my array.

for (var i = 0; i < questions.length; i++) {
  var question = questions[i].question;

  // document.getElementById("display").appendChild(document.createElement("br"));

  for (var all in question) {
    document.getElementById("display").innerHTML = question;
  }

  var options = questions[i].options;
  // document.getElementById("disp").appendChild(document.createElement("br"));
  var name = "radio" + i;
  for (var opt in options) {
    var radioEle = document.createElement("input");
    radioEle.style;
    radioEle.type = "radio";
    radioEle.value = options[opt];
    radioEle.name = name;
    document.getElementById("disp").appendChild(radioEle);
    var label = document.createElement("Label");
    label.innerHTML = options[opt];
    document.getElementById("disp").appendChild(label);
    document.getElementById("disp").appendChild(document.createElement("br"));
  }

  if (question == questions[i].answer) {
    score++;
  }
  document
    .getElementById("question")
    [i].appendChild(document.createElement("br"));
}

// nextquestion(); a function that loops through the question and array and shows the next question and array

// function nextquestion() {
//   if (i < questions.length - 1) {
//     i = i + 1;

//     nextquestion();
//   }
// }

function mySlide(param) {
  if (param === 'next') {
    i++;
    if (i === questions.length) {
      questions.length - 1;
    }
  } else {
    i--;
    if (i < 0) {
      i = 0;
    }
  }

  document.getElementById("nextpage") = questions[i]  ;
}

// document.getElementById("nextpage").addEventListener("click", function next(i) {
//   var i = 0;
//   if (i == questions[i]) {
//     i++;

//     document.body.getElementById("playnext").innerHTML = questions[i];
//   }
// });

// // function to display next button

// // const QUESTIONS = [
// //   "What is 2+8?",
// //   "How many legs does the spider have?",
// //   "what is the capital of Russia?",
// //   {
// //     question: "Which of the following is not a product of Google?",
// //     options: ["Youtube", "Gmail", "Netflix", "Google Drive"],
// //     answer: 2,
// //   },

// //   {
// //     question: " which of the following is not an area in Ibadan",
// //     options: ["Iwo road", "Gbagi", "Lekki", "Ojoo"],
// //     answer: 2,
// //   },
// // ];

// // let counter = 0;
// // let display = document.getElementById("display");
// // display.innerText = QUESTIONS[counter];

// // let btn = document.getElementById("next");

// // btn.addEventListener("click", () => {
// //   counter++;
// //   display.innerText = QUESTIONS[counter];
// // });

// // document.getElementById("questions").innerHTML = myQuestions
// // let correctAnswer = options;
// // var  myQuestions = [
// //   {
// //   Number1: 'What is Programming';
// //   answers: {
// //     a: '5'
// //     b: '6 '
// //     c: ' 8'
// //   }
// //   correctAnswer:
// // }

// // {

// // };
// // document.getElementById("start").addEventListener("click", function () {
// // //   var countDown = new Date("Nov 1, 2022 23:59:00").getTime();

// //   var x = setInterval(function () {
// //     var getNow = new Date().getTime();

// //     var distance = countDown - getNow;

// //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //     var hours = Math.floor(
// //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// //     );
// //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //     document.getElementById("countdown").innerHTML =
// //       days + "days : " + hours + " : " + minutes + " : " + seconds + " : ";

// //     if (distance < 0) {
// //       clearInterval(x);
// //       document.getElementById("countdown").innerHTML = "TIME EXPIRED";
// //     }
// //   }, 1000);
// // });
