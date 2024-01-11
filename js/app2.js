let request;
if(window.XMLDocument) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "artist_Data.xml")
request.onreadystatechange = function() {
    if ((request.status === 200) && (request.readyState === 4)) {
        // console.log(request.responseXML.getElementByTagName('artistName'));
        // console.log(items);

        // let items = request.responseXML.getElementsByTagName('artistName');
        // document.getElementById("artist").innerHTML = items[0].firstChild.nodeValue;
        getArtist(this);
    }
}
request.send();

function getArtist(aaa) {
let i;
let items = aaa.responseXML;
let output = "<tr><th>Artist</th><th>Album</th><th>Label</th><th>Year</th></tr>";
let artistList;
let x = items.getElementsByTagName('artist');
let container = document.getElementById("container");
// let sections = document.getElementsByClassName("artist-sections");
// consople.log(x.length)
console.log(x);
for(i = 0; i < x.length; i++) {
    output += '<tr><td>' + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + '</td>';
    output += '<td>' + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + '</td>';
    output += '<td>' + x[i].getElementsByTagName('label')[0].childNodes[0].nodeValue + '</td>';
    output += '<td>' + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + '</td></tr>';
}
    // document.querySelector(".container").innerHTML = artistList;

}
// for (i = 0; i < x.length; i++) {
//     artistList = "<h1>Artist: " + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + "</h1>";
//     document.getElementsByClassName("container").innerHTML = artistList;
// }