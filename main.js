const sh = window.innerHeight-25;
const sw = window.innerWidth-25;
var points = 0;
function clicked(){
    document.getElementById("target").style.marginTop = `${Math.floor(Math.random() * sh)}px`;
    document.getElementById("target").style.marginLeft = `${Math.floor(Math.random() * sw)}px`;
    points+=1;
    document.getElementById("target").value = points.toString();
};