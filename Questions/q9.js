// Question 9
// Use a JavaScript to check whether the given text is number or not.

const q9 = document.querySelector("#q9");
q9.addEventListener("click", () => {
    let number = parseFloat(prompt("Enter some text or a number"));
    const q9_ans = document.getElementById("q9-ans");
    if(Number.isNaN(number))
    {
        q9_ans.innerHTML = "This is not a number";
    }
    else
    {
        q9_ans.innerHTML = "This is a number";
    }
})