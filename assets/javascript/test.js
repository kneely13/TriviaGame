var theQuestions=[
    {
        question:'questionOne',
        answers:['anwserOne','anwserTwo','anwserThree','anwserFour'],
        correctAnswer:'anwserTwo'
    }
];



$(document).ready(function () {
    $(".mainContainer").hide();
    $("#timer").hide();
    $(".cardResults").hide();

    $("#start-button").on("click", function() {
        console.log("Ok, this works");
        $("#timer").show();
        $(".card").hide();
        $(".mainContainer").show();
        // run();
        $('#question').text("question");
        $('#question').text(theQuestions[0].question)
            addAnswers(theQuestions[0].answers);
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
    
       
    
    
        var addAnswers = function(answerArray){
            for(var i=0;i<answerArray.length; i++){
                $('#answers').append('<p id="answerBtn' + i + '">'+ answerArray[i] + '</p>')
            }
    
        }
       
        $(document).on('click', "#answerBtn0, #answerBtn1, #answerBtn2, #answerBtn3", function(){
            console.log(this.innerHTML);
            if(this.innerHTML===theQuestions[0].correctAnswer){
                console.log('correct');
            }else{
                console.log('incorrect');
            }   
        })
      
})
