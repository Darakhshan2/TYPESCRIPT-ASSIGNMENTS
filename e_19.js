"use strict";
//  WITH ASSIGNMENT NO 17 WE SOLVE ASSIGNMENT NO 19
let gst_List2 = ["Maryam", "Konain", "Minal"];
let arrive_Guest2 = gst_List2.splice(0, 1, "laiba"); //here iam using arrya replace method
let index = 0;
//here i am appling while loop
while (index < gst_List2.length) {
    console.log(`Dear ${gst_List2[index]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
    index++;
}
console.log(arrive_Guest2[0], `is the one who is not coming`);
console.log(` \n\nNow i have a new dining table so i found a large space so i am inviting more guest;`);
'\n\n';
gst_List2.unshift('Subhan');
gst_List2.push('Ilsa');
gst_List2.splice(2, 0, 'sidra');
//after adding more names i am apply here for loop
for (let index = 0; index < gst_List2.length; index++) {
    console.log(`Dear ${gst_List2[index]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
}
;
console.log('\nSorry i can only invite two peoples');
while (gst_List2.length > 2) {
    let remove_gst = gst_List2.pop();
    console.log(`\n Sorry Dear ${remove_gst} , I can't invite you to dinner`);
}
for (let index = 0; index < gst_List2.length; index++) {
    console.log(`\n Dear ${gst_List2[index]} ,\n\n you are still invited for dinner\n\n see you tomorrow\n\n`);
}
gst_List2.splice(0, 2);
console.log(gst_List2);
console.log(`Total number of guest are ${gst_List2.length}`);
