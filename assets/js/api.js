
$(document).ready(function(){
var APIkey = "5Nnteu5jva3e34yiO4plyxydSMn8vkFs";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + APIkey + "&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})

var topics = ['hours', 'dog', 'cat', 'lion', 'bird', 'butterfly', 'chicken', 'goldfish', 'gerbil'];
console.log(topics);

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
    //console.log("I am a button");
    //event.preventDefault();
    var animal = $("#animal-input").val();

    topics.push(animal);
    console.log(animal);
   // buttons();

})
})

//create an onclick function grab the value of the button
//use that value in the query link 
//add query to the link
//add it to page (html)