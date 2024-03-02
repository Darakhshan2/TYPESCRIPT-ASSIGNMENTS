"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function makeShirt(size = "largr", text = "I Love typescript") {
    console.log(`You have orderess a  ${size} size shirt say's that ${text}`);
}
;
makeShirt();
makeShirt('medium');
makeShirt(`small`, 'i need a different size for wear');
