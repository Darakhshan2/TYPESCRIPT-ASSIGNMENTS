"use strict";
/* ASSIGNMENT NO 3

Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
// lowercase exercise
let Name = "DARAKHSHAN";
let a = Name.toLowerCase();
console.log(a);
// uppercase excersice
let variable = "darakhshan";
let b = variable.toUpperCase();
console.log(b);
// titlecase => capitalization
let myMsg = " i am student at governor it initiative";
function titleCase(msg) {
    return msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
    ;
}
console.log(titleCase(myMsg));
