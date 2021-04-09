var MyBtn = document.getElementsByClassName("mybtn");
var index = 0

function Button(n){
    CurrentShowButton(index = n)

}

function CurrentShowButton(n){
    for(var i = 0; i < MyBtn.length; i++){
        MyBtn[i].className = MyBtn[i].className.replace(" Active"," ");
    }
    MyBtn[n].className +=" Active";

}

function List(){
    document.querySelector(".directory-main").style.display = "block";
    document.querySelector(".cards").style.display = "block";
    x= document.querySelectorAll(".cards img");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "200px";
    }
    y = document.querySelectorAll("section");
    for (i = 0; i < y.length; i++) {
      y[i].style.margin = "10px";
    }

}

function Grid(){
    document.querySelector(".cards").style.display = "grid";
    x= document.querySelectorAll(".cards img");
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "100%";
    }

}