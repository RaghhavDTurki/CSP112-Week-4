// Question 1
// Use JavaScript code to calculate double of the given number. (Event based)
const q1 = document.querySelector("#q1");
q1.addEventListener("click", () => {
    let number = prompt("Enter a number");
    number = parseInt(number);
    if(Number.isNaN(number)){
        alert("enter a valid number")
    }
    else
    {
        let result = number * 2;
        let p = document.getElementById("q1-ans");
        p.innerHTML = `<br>The double of ${number} is ${result}`
    }
})
