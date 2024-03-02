/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that thmagician_name?: string[]magician_name: string[]e list has actually been modified.*/

function show_magicians1(magician:string[]){
    for(let magicians of magician){
        console.log(magicians)
    }
};
function make_great(magicians:string[]):void{
    for(let i=0; i<magicians.length;i++){
        magicians[i]=magicians[i]+ ' the great '
    }
}

let magician = ["saad",'bilal',"anwar"];
make_great(magician);
show_magicians1( magician);
