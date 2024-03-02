//ASSIGNMENT NO 14

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_List:string[]=["Maryam","Konain","Minal"];
let i=0;

while(i<guest_List.length) {
    console.log(`Dear ${guest_List[i]} ,\n\n i want to invite you for dinner at my home \n\n see you tomorrow\n\n`);
    i++;
}