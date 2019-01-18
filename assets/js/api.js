
$(document).ready(function () {


    var topics = ['hours', 'dog', 'cat', 'lion', 'bird', 'butterfly', 'chicken', 'goldfish', 'gerbil'];

    function buttons() {
        for (var i = 0; i < topics.length; i++) {
            //console.log(topics[i]);
            var button = $("<button>").addClass("btn");
            button.text(topics[i]);
            $("#topics").append(button);


        }
    }

    buttons();

    $(".btn").click(function () {
        event.preventDefault();
        var gifAnimal = $(this).val().trim();
        console.log(gifAnimal);
        var APIkey = "5Nnteu5jva3e34yiO4plyxydSMn8vkFs";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifAnimal + "&api_key=" + APIkey + "&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })

        //buttons();
    })

    $("#add-animal").click(function () {
        //when submit button click add another button in div
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        topics.push(animal);
        console.log(animal);
        var button = $("<button>").addClass("btn");
        button.text(animal);
        $("#topics").append(button);

    })

})

//create an onclick function grab the value of the button
//use that value in the query link 
//add query to the link
//add it to page (html)