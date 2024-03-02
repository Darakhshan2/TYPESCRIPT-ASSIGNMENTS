"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let Places = ['Germany', 'Italy', 'Turkey', 'Paris', 'Edenburg'];
//• Print your array in its original order.
console.log("\n original array", Places);
//Print your array in alphabetical order without modifying the actual list.
//console.group(" \n copy array",[...Places]);// making copy
console.group("\n alphabetical array", [...Places].sort()); //alphabetical order
//Show that your array is still in its original order by printing it.
console.log("\n array is in original position", Places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.group("\n reverse alphabetical array", [...Places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("\n array is still in original position", Places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n reverse the order orriganl array", Places.reverse());
console.log("\n original array ", Places);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n  show array back to its original order ", Places.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n array changed to alphabetical order", Places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n array in reverse alphabetical order", Places.sort().reverse());
