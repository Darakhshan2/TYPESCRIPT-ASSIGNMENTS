/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magicians_name:string[]=["saad",'bilal',"anwar"];
function show_magicians(){
    for(let magician of magicians_name){
        console.log(magician)
    }
};
show_magicians()
