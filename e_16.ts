//ASSIGNMENT NO 16

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
/*• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let gst_List1:string[]=["Maryam","Konain","Minal"];

let arrive_Guest1=gst_List1.splice(0,1,"laiba")//here iam using arrya replace method

let inde=0;
//here i am appling while loop

while(inde<gst_List1.length) {
    console.log( `Dear ${gst_List1[inde]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
    inde++;
}
console.log(arrive_Guest1[0],`is the one who is not coming`);

console.log(` \n\nNow i have a new dining table so i found a large space so i am inviting more guest;`);
'\n\n'

gst_List1.unshift('Subhan');

gst_List1.push('Ilsa') ;

gst_List1.splice(2,0,'sidra');

//after adding more names i am apply here for loop

for(let inde=0;inde<gst_List1.length;inde++){
    console.log( `Dear ${gst_List1[inde]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
};