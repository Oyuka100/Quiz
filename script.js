var i = 0;
var correctAnswer = 0;
var inCorrect = 0;
var timeCounter = 1;
var score = 0;


var questions = [
  {
      question: "What does HTML stand for?",
      answer: [
        "Home Tool Masrkup Language",
        "Hyper Text Markup Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: 1
    }, {
      question: " Who is making the Web standards?",
      answer:[
              "Mozilla",
              "Microsoft",
              "The world wide web consotium",
               "google",
      ],
      correct: 2
    }, {
      question: "Choose the correct HTML element for the largest heading:",
      answer:[
              "h1",
              "heading",
              "head",
              "h6",
              
      ],
      correct: 0
    },{
      question: "What is the correct HTML for creating a hyperlink?",
      answer: [
            "A url=http://www.google.com Google.com /a",

            "A http://www.google.com /a",
      
            "A href=http://www.google.com Google /a",
      
            "A name=http://www.google.com Google.com /a",

      ],
      correct: 2
    },{
      question: "Inside which HTML element do we put the JavaScript?",
      answer: [
              "scripting",
              "script",
              "js",
              "javascript",

      ],
      correct: 1
    },
  ];

  function reRender() {
    $("#questions").html(questions[i].question);
    $("#btn1").html(questions[i].answer[0]).attr("correct", 0 === questions[i].correct);
    $("#btn2").html(questions[i].answer[1]).attr("correct", 1 === questions[i].correct);
    $("#btn3").html(questions[i].answer[2]).attr("correct", 2 === questions[i].correct); 
    $("#btn4").html(questions[i].answer[3]).attr("correct", 1 === questions[i].correct); 
  }

$(document).ready(function() {
  reRender();

  $(".btn-lg").click(function(event) {
    var clickedElement = $(this);
    var isAnswerCorrect = clickedElement.attr("correct");

    if(isAnswerCorrect === "true") {
      correctAnswer = correctAnswer + 1; //correctAnswer += 1; correctAnswer++;
    } else {
      inCorrect++;
    }
    i++;

    reRender();
  });
  $("#startButton").click(function(){
  var interval = setInterval(function() {
    var timer = $("#stopWatch").html();
    var seconds = parseInt(timer,10);
    seconds -= 1;

    if (seconds < 0 ) {
        seconds = 59;
    }
    else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
    $("#stopWatch").html(seconds);

    if (seconds == 0)
        clearInterval(interval);
}, 1000);
});

$("#goback").click(function(){
  var backButton = backButton;
  backButton.back();
  
});

});
