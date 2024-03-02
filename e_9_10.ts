//`ASSIGNMENT NO 9 & 10

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message

const fav_Num:number = 5;

let reveal_Num:string =`here is mine favourite number ${fav_Num}`;

// HERE I AM PERFORMING EXTRA TASK JUST FOR PRACTICE PURPOSE 

function capital(reveal: string){
    return reveal.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');;
}

console.log(capital(reveal_Num));