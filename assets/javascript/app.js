// function QuizQuesiton(question, choices, correctAnswer) {
//     this.question = [
//         new QuizQuestion("question", ["choices", "choices"], #),
//         new QuizQuestion("question", ["choices", "choices"], #),
//         new QuizQuestion("question", ["choices", "choices"], #),
//     this.choices = choices,
//     this.correctAnswer = correctAnswer}






$(document).ready(function() {
    $('.card').show();
    $('.mainContainer').hide();
    $('#timer').hide(run);
    $('.cardResults').hide();
    
    $('.btn').click(function(){
        $('.card').hide();
        $('.mainContainer').show();
        $('#timer').show( );
    })

    $('.cardResults .btn').click(function(){
        $('.card').show();
        $('.cardResults').hide();
        $('.mainContainer').hide();
        $('#timer').show(run);
        
    });
    

});


var intervalId;
var secondsTotal = 3;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}

function stop(){
   
    clearInterval(intervalId);
    // $('.mainContainer').hide();
    //     $('#timer').hide(); 
    //     $('.cardResults').show();

}

function decrement() {

    secondsTotal--;
    $("#timer").html("<h2>" + secondsTotal + "</h2>");

    if (secondsTotal === 0) {
      stop();
      alert("Time Up!");
      
    }
}

run();
