var i = 0;
var correctAnswer = 0;
var inCorrect = 0;
var timer = 60;
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
      timer -= 10;
    }
    i++;

    reRender();
  });
  $("#startButton").click(function(){
  var interval = setInterval(function() {
    timer -= 1;

    if (timer < 0 ) {
        timer = 59;
    }
   $("#stopWatch").html(timer);

    if (timer == 0) {
        clearInterval(interval);
        setStorage();
    }
}, 1000);
});
function setStorage() {
  var returnStor = localStorage.getItem("correctAnswer");

  if(returnStor == null || correctAnswer > parseInt(returnStor)){
  localStorage.setItem("correctAnswer", correctAnswer);
}

};
$("#view").click(function(){
  $("#save-score").html(localStorage.getItem("correctAnswer"));

});

  


});
