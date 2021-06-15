// Question 6
// Use JavaScript program to find greatest no. from any three given nos.

const q6 = document.querySelector("#q6");
q6.addEventListener("click", () => {
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const num3 = parseFloat(prompt("Enter third number: "));
    const largest = Math.max(num1,num2,num3);

    const q6_ans = document.getElementById("q6-ans");
    q6_ans.innerHTML = `The largest number amongst ${num1}, ${num2} and ${num3} is ${largest}`;
})