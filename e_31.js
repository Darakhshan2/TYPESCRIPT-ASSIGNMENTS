"use strict";
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let userName1 = ['eric', 'devil', 'herry', 'admin', 'dushi'];
function greeting(userName1) {
    for (let i in userName1) {
        if (userName1[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report`);
        }
        else {
            console.log(`Hello ${userName1[i]}, thank you for logging in again.`);
        }
        ;
    }
}
greeting(userName1);
userName1 = [];
console.log(`\nfor an empty username:\n`);
if (userName1.length === 0) {
    console.log(" We need to find some users!");
}
;
