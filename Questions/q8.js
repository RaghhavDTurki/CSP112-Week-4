// Question 8
// Use a JavaScript to change background color of the document by using mouseover event of button.

const q8 = document.querySelector("#q8");
q8.addEventListener("mouseover", () => {
    document.getElementById("change-color").style.backgroundColor = "#5115a8";
})

q8.addEventListener("mouseout", () => {
    document.getElementById("change-color").style.backgroundColor = "#fb613f";
})