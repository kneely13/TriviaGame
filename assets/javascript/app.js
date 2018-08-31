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
        secondsTotal = 5;
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
