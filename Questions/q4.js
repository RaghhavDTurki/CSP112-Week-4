// Question 4
// Use JavaScript code to calculate square and cube of the number.

const q4 = document.querySelector("#q4");
q4.addEventListener("click", () => {
    const q4_para = document.getElementById("q4-ans");
    let number = prompt("Enter a number");
    number = parseInt(number);
    if(Number.isNaN(number))
    {
        alert("Enter a valid Number");
    }
    else
    {
        let squared = number ** 2;
        let cubed = number ** 3;
        q4_para.innerHTML = `<br>The square of ${number} is ${squared} and the cube is ${cubed}`;
    }
})