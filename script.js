
let x = document.getElementsByClassName(".btn").value

console.log("Hello World")
console.log(x)

function text() {
    alert("Hello World")
}

function postMsg() {
    let msg = document.querySelector("#msg-input").value
    alert(msg)
}

function appendList() {
    var myImages1 = new Array();
    myImages1[0] = "assets/MyImage1.jpeg";
    myImages1[1] = "assets/MyImage2.jpeg";
    myImages1[2] = "assets/MyImage3.pngd";

    var rnd = Math.floor(Math.random() * myImages1.length);

    var img = new Image();
    img.src = myImages1[rnd];
    document.getElementById("image").appendChild(img);
}