
var topics = ['horse', 'dog', 'cat', 'lion', 'bird', 'butterfly', 'chicken', 'goldfish', 'gerbil'];

for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button class="btn">' + topics[i] + '</button>')
    buttons.appendTo('#topics');
}



$(document).on('click', 'button.btn', function (event) {
    event.preventDefault()

    var animal = $(this).html();
    console.log(animal);

    var APIkey = "5Nnteu5jva3e34yiO4plyxydSMn8vkFs";

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + APIkey + "&limit=5";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        $("#div1").empty();

        for (var j = 0; j < results.length; j++) {
            

            var animalDiv = $("#div1");

            var p = $("<p>").text("Rating: " + results[j].rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[j].images.fixed_height.url);

            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#div1").prepend(animalDiv);

        };


    })


})

$("#add-animal").on("click", function(event){
    event.preventDefault()

    var input = $("#animal-input").val();

    console.log(input);

    var buttons = $('<button class="btn">' + input + '</button>')
    $("#topics").append(buttons);

})





