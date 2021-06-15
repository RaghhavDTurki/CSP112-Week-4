// Question 10
// Use a JavaScript to check whether the given no. is +ve or –ve or zero.

const q10 = document.querySelector("#q10");
q10.addEventListener("click", () => {
    let number = parseInt(prompt("Enter a number"));
    const q10_ans = document.getElementById("q10-ans");
    if(Number.isNaN(number))
    {
        alert("Enter a valid number");
    }
    else{
        q10_ans.innerHTML = `The number ${number} is `;
        if(number > 0) q10_ans.innerHTML += "greater than 0"
        if(number == 0) q10_ans.innerHTML += "equal than 0"
        if(number < 0) q10_ans.innerHTML += "less than 0"
    }
})