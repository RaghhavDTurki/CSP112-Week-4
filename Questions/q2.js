// Question 2
// Use JavaScript code to accept a day and checks whether is a weekend or a working day.

const q2 = document.querySelector("#q2");
q2.addEventListener("click", () => {
    const input = document.getElementById("q2-date").value;
    let nd = new Date(input);
    let ans = nd.getDay();
    let day_type = "";
    if(ans == 0 || ans == 6)day_type = "Weekend";
    else day_type = "Weekday";
    let dayMap = new Map();
    dayMap.set(0,"Sunday");
    dayMap.set(1,"Monday");
    dayMap.set(2,"Tuesday");
    dayMap.set(3,"Wednesday");
    dayMap.set(4,"Thursday");
    dayMap.set(5,"Friday");
    dayMap.set(6,"Saturday");
    let day = dayMap.get(ans);
    const q2_ans = document.getElementById("q2-ans");
    q2_ans.innerHTML = `The given day is ${day} and it is a ${day_type}.`;

})
