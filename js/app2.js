let request;
if(window.XMLHttpRequest) {
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
let artistList = '';
let x = items.getElementsByTagName('artist');
let container = document.getElementById("container");
// consople.log(x.length)
console.log(x);

for(i = 0; i < x.length; i++) {
    artistList += '<div class="artists" id="artist' + (i+1) + '">';
    artistList += '<section><h1 class="artists-section">Artist: ' + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + "</h1>";
    artistList += "<h3>Album: " + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + "</h3>";
    artistList += "<h4>Label: " + x[i].getElementsByTagName('label')[0].childNodes[0].nodeValue + "</h4>";
    artistList += "<h4>Year: " + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + "</h4>";
    artistList += '<h4>Artist Bio: </h4><section class="bio"><p> ' + x[i].getElementsByTagName('bio')[0].childNodes[0].nodeValue + '</p><img src="images/' + x[i].getElementsByTagName('images')[0].childNodes[0].nodeValue + '.jpeg" alt="' + x[i].getElementsByTagName('album')[0].childNodes[0].nodeValue + ' "Album Image"></section>';
    artistList += "</section></div>";
    // you can wrap a single quote around double quotes in javascript

    // let artistDiv = document.getElementsByClassName("artists");
    // console.log(artistDiv[i].items(0));
    // artistDiv[i].items(0).style.backgroundColor = bg[i];
}
container.innerHTML = artistList;
let artistDiv = document.getElementsByClassName("artists");
    for (let i = 0; i < artistDiv.length; i++) {
        console.log(artistDiv[i]);
        artistDiv[i].style.backgroundColor = bg[i];
        artistDiv[i].style.backgroundImage = gradient[i];
    }
// console.log(artistDiv.item(0));

}

let bg1 = "#3EECAC";
let gradient1 = "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)";

let bg2 = "#FBDA61";
let gradient2 = "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)";

let bg3 = "#FFDEE9";
let gradient3 = "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)";

let bg4 = "#52ACFF";
let gradient4 = "linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)";

let bg = [bg1, bg2, bg3, bg4];
let gradient = [gradient1, gradient2, gradient3, gradient4];

// window.onload = ()=> {
//     let artistDiv = document.getElementsByClassName("artists");

//     console.log(artistDiv.items(0));

//     // for (let i = 0; i < artistDiv.length; i++) {
//     //     console.log(artistDiv[i].item(0));
//     //     artistDiv[i].item(0).style.backgroundColor = bg[i];
//     // }
// }



