// Question 3
// Use JavaScript code to calculate Fibonacci Series up to N terms. Where N is any given number.


const q3 = document.querySelector("#q3");
q3.addEventListener("click", () => {
    const q3_ans = document.getElementById("q3-ans");
    q3_ans.innerHTML = "";
    let terms = prompt("Enter a Positive number < 10^5 ");
    let sequence = [0,1];
    for(let term = 2; term < 10000; term++)
    {
        let current_term = sequence[term - 1] + sequence[term - 2];
        sequence.push(current_term);
    }
    terms = parseInt(terms);
    if(Number.isNaN(terms))
    {
        alert("Enter a valid Number!");
    }
    else{
        let q3_para = `The first ${terms} of the Fibonacci sequnece are: <br>`;
        for(let i = 0; i < terms; i++)
        {
            q3_para += sequence[i] + " ,";
        }
        q3_ans.innerHTML = q3_para;
    }
})