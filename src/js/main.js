// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import * as Popper from "@popperjs/core";

document.getElementById("p1").style.display = "flex";
document.getElementsByClassName("page-link")[0].addEventListener("click", function(){
    document.getElementById("p1").style.display = "flex";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
 });

 document.getElementsByClassName("page-link")[1].addEventListener("click", function(){
    document.getElementById("p2").style.display = "flex";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p3").style.display = "none";
 });
 document.getElementsByClassName("page-link")[2].addEventListener("click", function(){
    document.getElementById("p3").style.display = "flex";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
 });

