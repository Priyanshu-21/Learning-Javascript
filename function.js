// Introduction to Higher Order function 
// Question :- make HOF for calculating diameter and area of circle 
// const PI = 3.14;

// function calculateCircle(radius, choice) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++) {
//         output.push(choice(radius[i]));
//     }

//     return output;
// }

// function diameter(radius) {
//     return 2 * radius;
// }

// function areaOfcircle(radius) {
//     return PI * radius * radius;
// }

// const radiusValue = [21, 25, 26];

// const resultDiameter = calculateCircle(radiusValue, diameter);
// console.log("Diameter of Circle are : ", resultDiameter);

// const resultArea = calculateCircle(radiusValue, areaOfcircle);
// console.log("Area of the radius are : ", resultArea);

/* 

// Builtin HOF are : - map, reduce, and filter 

// Map function 

let arrayList = [21, 22, 23, 24, 25];

const result = arrayList.map((number) => number = number * 10);

console.log(result);


let userInfo = [
    {firstname: "Priyanshu", lastname: "Mishra", hobbie: "Playing cricket"}, 
    {firstname: "Ayush", lastname: "Chauhan", hobbie: "Playing Football"}, 
    {firstname: "Priyanshi", lastname: "Sharma", hobbie: "Playing Ludo"}
    
];

const resultOfuser = userInfo.map((user) => user.firstname + " " + user.lastname);

console.log(resultOfuser);

*/
// spread operator and use in function 

// const userFirst = {
//     firstName: "Priyanshu", 
//     lastName: "Mishra", 
//     age: 23,  
//     occupation: "Programmer"
// };

// const userSecond = {
//     ...userFirst, // this ... dot (spread operator) will copy object userFirst keys and values 
//     firstName: "Aayush", 
//     lastName: "chauhan" // in this we will override userFirst object values in userSecond
// };


// console.log(userSecond);


// How to use filter function in traditional way (before ES6) 
function getFilter(arrayUser) {
    let filterUser = [];
    for(let i = 0; i < arrayUser.length; i++) {
        if(arrayUser[i].age > 24 && arrayUser[i].occupation === "Programmer") {
            filterUser.push(arrayUser[i]);
        }
    }

    return filterUser;
}


const arrayUser = [
    {
        name: "Priyanshu Mishra", 
        age: 23, 
        occupation: "Programmer"
    },
    {
        name: "Aayush Chauhan", 
        age: 29, 
        occupation: "Gamer"
    },
    {
        name: "Aditya Bhradwaj", 
        age: 30, 
        occupation: "Painter"
    },
    {
        name: "Rishiv Kaushal", 
        age: 34, 
        occupation: "Programmer"
    }
];

const resultUser = getFilter(arrayUser);

// console.log(resultUser);


// The above program is to filter things (traditional way) 

// Now using filter function 

const resultArray = arrayUser.filter((user) => {
    return user.age > 24 && user.occupation === "Programmer";
});

// To be more consize 
const resultNew = arrayUser.filter((user) => user.age > 24 && user.occupation === "Programmer");
console.log(resultNew);



