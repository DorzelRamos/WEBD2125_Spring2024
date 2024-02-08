"use strict";
const form = document.getElementById("museumform");

$("#submit").on('click', function(event) {
    event.preventDefault();
    let search = $("#search").val().trim();
    console.log(search);
    runSearch(search);
    form.reset();

});

function runSearch(searchs) {
    // Find all of the objects that are paintings and have the word "rabbit" in the title
    // let classification = ["Paintings", ""];
    let apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
    let queryString = $.param({
    apikey: "6b3e2d39-4b39-457b-8b7b-097c80067f57",
    // title: "rabbit",
    title: searchs,
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data.records); 
   let output = '<ul>';
   for(let i = 0; i < data.records.length; i++) {
    let newArt = data.records[i].primaryimageurl;
    output += "<li>";
    output += '<img src="' + newArt + '" alt="#">';
    output += "</li>";
   }
   output += "</ul>";
   $("#harvard").html(output);
});
    // form.reset();
}