    
$(document).ready(function() {
    var intervalId;
    var secondsTotal;
    var mainContainer = document.getElementsByClassName('.mainContainer');
    var resultsContainer = document.getElementsByClassName('.results');
    var submitButton = document.getElementById('submit');
    
    $(".mainContainer").hide();
    $("#timer").hide();
    $(".cardResults").hide();

    $("#start-button").on("click", function() {
        console.log("Ok, this works");
        $("#timer").show(secondsTotal);
        $(".card").hide();
        $(".mainContainer").show();
        run(myQuiz);
        
    });

    $("#submit").on("click", function() {
        $(".mainContainer").hide();
        $(".cardResults").show();
        $(".card").hide();
        $("#timer").hide();
    });

    $("#back-button").on("click", function() {
      $(".cardResults").hide();
      $(".card").show();
      $("#timer").hide();
    });


    function myQuiz() {
        var output = [];

        theQuestions.forEach( (currentQuestion, questionNumber) => {

            var answers=[];

                for(letter in currentQuestion.answers){

                    answers.push('<label> <intput type="radio" name="question${questionNumber}" value="${letter}"> ${letter} : ${currentQuestion.answers[letter]} </label>');
                }

                output.push(`<div class="question"> ${currentQuestion.question} </div> <div class="answers"> ${answers.join('')} </div>`);
            }
        );
        

        mainContainer.innerHTML = output.join('');
    };

    
    function revealResult() {

        var answerContainers= mainContainer.querySelectorALL('.answers');

        var numCorrect = 0;

        theQuestions.forEach( (currentQuestion, questionNumber) => {

            var answerContainer = answerContainers[questionNumber];
            var selector = 'input[name=question${questionNumber}]:checked' ;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
            }

        });
        cardResults.text=numCorrect +' /'+ theQuestions.length;
        revealResult()
    }
    revealResult()

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
            $(".cardResults").show(quizQuestion);
        };
    };

})
    

