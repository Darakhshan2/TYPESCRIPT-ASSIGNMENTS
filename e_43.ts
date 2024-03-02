 /*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array.
   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
   function show_magicians3(magicians3:string[]){
    for(let magicians of magicians3){
        console.log(magicians)
    }
   };
function make_great2(magicians3:string[]) {
    const greatMagicians:string[]=[];
    for(let i=0; i<magicians3.length;i++){
        greatMagicians.push(magicians3[i] + ' the great');
    }
    return greatMagicians;
}

let magicians3 = ["saad",'bilal',"anwar"];
const newmagicians:any =make_great2(magicians3);
show_magicians3(magicians3);
show_magicians3(newmagicians);