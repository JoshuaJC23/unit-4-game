var wins = 0;
var losses = 0;
randomNumber;
totalScore = 0;
var pics = ["/assets/images/crystal1.jpg", "/assets/images/crystal2.jpg", "/assets/images/gem1.jpg", "/assets/images/gem2.jpg"]

$(document).ready(function(){

function begin() {

    $(".crystals").empty();

    randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#randomNumber").text(randomNumber);

    console.log(randomNumber);


    for (var i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * 11) + 1;
        console.log(randomValue);

        var imageCrystal = $("<img src = '" + pics[i] + "'>");

        imageCrystal.addClass("crystal-image");

        // imageCrystal.attr("src", pics[i]);

        imageCrystal.attr("data-random-value", randomValue);

        $(".crystals").append(imageCrystal);

    };

};
begin();

$(document).on("click", ".crystal-image", function () {

    var num = parseInt($(this).attr("data-random-value"));

    totalScore += num;

    $("#totalScore").text(totalScore);
    console.log(totalScore);

    if (totalScore > randomNumber) {
        losses++;
        $("#losses").text(losses);
        begin();
        totalScore = 0;
        alert("You Lose");
        console.log("you lose")
    }

    else if (totalScore === randomNumber) {
        wins++;
        $("#wins").text(wins);
        begin();
        totalScore = 0;
        alert("You Win");
    }

});

});