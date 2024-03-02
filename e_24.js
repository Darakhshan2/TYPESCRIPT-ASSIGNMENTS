"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 */
//1. Tests for equality and inequality with strings
let str1 = ["apple", "mango", "banana"];
let str2 = ["orange", "litchi"];
let cond1 = str1 == str2 ? "true" : "false";
console.log(cond1);
// 2.Tests using the lower case function
let str3 = "this is me darakhshan";
let str4 = "THIS IS ME DARAKHSHAN";
let result3 = str3 == str4 ? "true" : "false";
console.log(result3);
//•3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let l = 3;
let k = 4;
let equality = l == k ? "true" : "false";
console.log(equality);
let inequal = l != k ? "true" : "false";
console.log(inequal);
let cond = l > k;
console.log(l > k); // l is greaterthan k ans false
let cond2 = l <= k;
console.log(l <= k); // k is less than ans true
//  4.Tests using "and" and "or" operators
let q = 5;
let A = 6;
let condition_and = q <= A; // q is lessthan eaual too A
let condition_and1 = q == A;
console.log(condition_and && condition_and1);
//5. test using orr 
let condition_orr = q == 5;
let condition_orr1 = q > A;
console.log(condition_orr || condition_orr1);
// Test whether an item is in a array
const nums = [1, 3, 5, 7];
console.log(nums.includes(6)); //false
const str = "apple is my fvrt food";
console.log(str.includes('my')); //true
const string = "My name is darakhshan";
console.log(string.includes('is', 7)); //true
