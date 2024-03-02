/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

type car = {
    manufacturer:string
    model :string
    [key:string]:any;
}

function createCar(  manufacturer:string, model :string, optinal: Record<string,any>):car{
  return {
    manufacturer,
    model,
    ...optinal,
  }  
}
const myCar:car=createCar('toyota','carolla',{color :'black' , year :"2016"})
console.log(myCar);