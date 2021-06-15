// Question 5
// Use JavaScript code using mouse event so that by moving the mouse pointer over the text, the image should display.

const q5 = document.querySelector("#q5");
q5.addEventListener("mouseover" ,() => {
    document.getElementById("q5-img").src = "./img/yay.jpeg";
})

q5.addEventListener("mouseout" ,() => {
    document.getElementById("q5-img").src = "";
})