document.addEventListener("DOMContentLoaded", function() {
    var elemContainer = document.querySelector(".elem-container");
    var fixedImage = document.querySelector("#fixed-image");
    var elems = document.querySelectorAll(".elem");

    elemContainer.addEventListener("mouseenter", () => {
        fixedImage.style.display = "block";
    });

    elemContainer.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none";
    });

    elems.forEach((elem) => {
        elem.addEventListener("mouseenter", (event) => {
            var image = elem.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`;
        });
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}) 
let fullscr = document.querySelector("#fullscr");
let menu = document.querySelector("nav h3");
let navimg = document.querySelector('#navimg');
let flag = 0;

menu.addEventListener("click", function() {
    if (flag == 0) {
        fullscr.style.top = "0"; // Add "px" or appropriate unit
        navimg.style.opacity = "0";
        flag = 1;
    } else {
        console.log("Entered else block"); // Log a message to the console
        fullscr.style.top = "-100%"; // No need to add "px" for percentages
        navimg.style.opacity = "1";
        flag = 0;
    }
});
var loader= document.querySelector("#loader");
setTimeout(function(){
    loader.style.top="-100%";
},4200)


