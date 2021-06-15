// Question 7
// Use JavaScript to calculate the sum of first N natural nos., where N is a any given no.

const q7 = document.querySelector("#q7");
q7.addEventListener("click", () => {
    let terms = parseInt(prompt("Enter a positive number"));
    if(Number.isNaN(terms))alert("Enter a valid number");
    else
    {
        if(terms < 0)alert("Enter a positve number");
        else{
            let ans = (terms * (terms + 1)) / 2;
            const q7_ans = document.getElementById("q7-ans");
            q7_ans.innerHTML = `Sum of first ${terms} natural numbers is ${ans}`;
        }
    }
})