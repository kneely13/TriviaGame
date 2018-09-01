
    

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
        $(".mainContainer").show();
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
            $(".cardResults").show(quizQuestion);

        }
        else {
            //questions shown with this here
            var $el = $("#question");
            $el.innerHTML= quizQuestion.getQuestionIndex().text;
            for(var i=0; i < choices.length;i++){
                var $el=$("#choices"+ i);
                $el.innerHTML=choices[i];
                guess("btn" + i, choices[i]);

            }
            showProgress();
        };


    };

    function guess(id, guess) {
        var $button = $("id").on("click" , function(){
            quiz.guess(guess);
            decrement();
        });
        
    }

    

    function quizQuesiton(question, choices, correctAnswer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
        // this.checkAnswer= function(){
        //     return this.choices + this.correctAnswer;

        //     if (this.choices[i]===this.correctAnswer){
        //         correctAnswers++;
        //         $(".cardResults-text").html(correctAnswers + '/10');
        //     }
        //     else{
        //         correctAnswers--;
        //         $(".cardResults-text").html(correctAnswers + '/10');
        //     };
        // };

    } 
    quizQuesiton();
   
   decrement();

});

var questions= [
    new quizQuestion("question One is written here", ["choices", "choices"], 1 ),
    new quizQuestion("question two is written here", ["choices", "choices"], 0),
    new quizQuestion("question three is written here", ["choices", "choices"], 1)
    ];

    var options= new Quiz(questions);
    

