let text = document.getElementById("text");
console.log(text);

function getData() {
    let myDataRequest;
    if(window.XMLDocument) {
        myDataRequest = new XMLHttpRequest();
    }
    else {
        myDataRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // myDataRequest.onload = function() {
    //     text.innerHTML = this.responseText;
    // It doesn't know what 'this' is, so thats why the arrow didn't work at first
    myDataRequest.onload = ()=> {
        text.innerHTML = myDataRequest.responseText;
    }
    myDataRequest.open("GET", "data.txt", true);
    myDataRequest.send();
}