
$(document).ready(function() {
    $('.card').show();
    $('.mainContainer').hide();
    $('#timer').hide();
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
        // $('#timer').hide();
        
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
    $('.mainContainer').hide();
        $('#timer').hide(); 
        $('.cardResults').show();

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
