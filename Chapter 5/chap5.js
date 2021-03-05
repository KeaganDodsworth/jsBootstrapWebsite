var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter first thing");
    item2 = prompt("Enter second thing");
    item3 = prompt("Enter third thing");
    item4 = prompt("Enter fourth thing");
    item5 = prompt("Enter fifth thing");
    item6 = prompt("Enter sixth thing");
    updateList();
}

function updateList() {
    document.getElementById("1").innerHTML = item1;
    document.getElementById("2").innerHTML = item2;
    document.getElementById("3").innerHTML = item3;
    document.getElementById("4").innerHTML = item4;
    document.getElementById("5").innerHTML = item5;
    document.getElementById("6").innerHTML = item6;
}