/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let gst_List3:string[]=["Maryam","Konain","Minal"];

let arrive_Guest3:string[]=gst_List3.splice(0,1,"laiba")//here iam using arrya replace method

let index1=0;
//here i am appling while loop
 while(index1<gst_List3.length) {
    console.log( `Dear ${gst_List3[index1]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
    index1++;
}
console.log(arrive_Guest3[0],`is the one who is not coming`);

console.log(` \n\nNow i have a new dining table so i found a large space so i am inviting more guest;`);
'\n\n'

gst_List3.unshift('Subhan');

gst_List3.push('Ilsa') ;

gst_List3.splice(2,0,'sidra');

//after adding more names i am apply here for loop

for(let index1=0;index1<gst_List3.length;index1++){
    console.log( `Dear ${gst_List3[index1]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
};

console.log('\nSorry i can only invite two peoples');

while (gst_List3.length > 2) {
    let remove_gst1=gst_List3.pop();
    console.log(`\n Sorry Dear ${remove_gst1} , I can't invite you to dinner`);
}

for(let index1=0; index1<gst_List3.length;index1++){
    console.log(`\n \n Dear ${gst_List3[index1]} ,\n\n you are still invited for dinner\n\n see you tomorrow\n\n`);
}

gst_List3.splice(0,2);

console.log(gst_List3);
