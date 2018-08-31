var allQuestions = [{
    question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
    correctAnswer: 1
  },

  {
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know"],
    correctAnswer: 0
  },

  {
    question: "How can you lift an elephant with one hand?",
    choices: ["Truck", "Use both hands!", "Use a lever", "There is no such thing"],
    correctAnswer: 3
  }
];
var currentQuestion = 0;
var correctAnswers = 0;

function triviaQuestions(){
    $('#questions').append(parseInt(currentQuestion) + 1 + ". "+ allQuestions[currentQuestion].question);
    var multipleChoice = allQuestions[currentQuestion].choices;
    var formStuff="";
    for (var i = 0; i < multipleChoice.length; i++) {
        var radio = $('<input type="radio" name="optionChoice" value="'+i+'" class="optionChoice'+i+'">'+'<label for=".optionChoice'+i+'">' + allQuestions[currentQuestion].choices[i] )
       formStuff+=radio;
    }
    $(.html('#');
}
triviaQuestions();


$(document).ready(function() {

    
    
    
    var intervalId;
    var secondsTotal;

    $(".mainContainer").hide();
    $("#timer").hide();
    $(".cardResults").hide();

    $("#start-button").on("click", function() {
        console.log("Ok, this works");
        $("#timer").show(secondsTotal);
        $(".card").hide();
        $(".mainContainer").show(triviaQuestions);
        run();
    });

    $("#back-button").on("click", function() {
      $(".cardResults").hide();
      $(".card").show();
      $("#timer").hide();

    });

    function run() {
        secondsTotal = 59;
        $("#timer").text(secondsTotal);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        secondsTotal--;
        $("#timer").text(secondsTotal);
        if (secondsTotal < 1) {
            clearInterval(intervalId);
            $(".card").hide();
            $(".mainContainer").hide();
            $("#timer").hide();
            $(".cardResults").show();
        }
    }
});
