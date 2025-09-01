// let score = 95;

// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 75) {
//     console.log("Grade B");
// } else if (score >= 50) {// 75 >= 50
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }




// let day = 4;

// switch (day) {
//     case 1:
//         console.log("Monday");
        
//     case 2:
//         console.log("Tuesday");
        
//     case 3:
//         console.log("Wednesday");
        
//     default:
//         console.log("Another day");
// }


/*
another day 

whe
mon




*/


function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }

}

// Tests
// console.log(getDayName(7, 4));
// console.log(getDayName(3));  

function checkLogin(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please log in.";
}

// Tests
console.log(checkLogin(true));   // "Welcome back!"
console.log(checkLogin(false)); 