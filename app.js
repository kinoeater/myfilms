
var pic = [
    "imgs/marrigevslove.jpg",
    "imgs/endofworld.jpg",
    "imgs/lost.jpg",
    "imgs/papatya.jpg",
    "imgs/badbag.jpg",
    "imgs/village.jpg",
    "imgs/yarim.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
    if(counter === 7) {
        counter = 0;
    }
    img.src=pic[counter];
    counter=counter+1;
});
