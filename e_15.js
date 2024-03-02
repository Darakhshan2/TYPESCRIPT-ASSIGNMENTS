"use strict";
// ASSIGNMENT NO 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let gst_List = ["Maryam", "Konain", "Minal"];
let arrive_Guest = gst_List.splice(0, 1, "laiba"); //here iam using arrya replace method
let ind = 0;
while (ind < gst_List.length) {
    console.log(`Dear ${gst_List[ind]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
    ind++;
}
console.log(arrive_Guest);
