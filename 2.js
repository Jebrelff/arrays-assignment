let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

// print the array
console.log("cargoHold:\n\n" + cargoHold.join(', '));


/********************* Part-1 *********************/
// replace 'slinky' with 'space tether'
for(let index = 0; index < cargoHold.length; index++) {
    if(cargoHold[index] === 'slinky') {
        cargoHold[index] = 'space tether';
    }
}

// print the result
console.log("After Replacing 'slinky' with 'space tether':\n\n" + cargoHold.join(', '));


/********************* Part-2 *********************/
// removing the last element from the array
cargoHold.pop()

// print the result
console.log("After Removing Last Element:\n\n" + cargoHold.join(', '));


/********************* Part-3 *********************/
// removing the first element from the array
cargoHold.shift()

// print the result
console.log("After Removing First Element:\n\n" + cargoHold.join(', '));


/********************* Part-4 *********************/
// Adding 1138 at the start and '20 meters' at the end
tempArray = [1138];

// copy the cargoHold into the tempArray
for(let index = 0; index < cargoHold.length; index++) {
    tempArray.push(cargoHold[index]);
}

// add '20 meters' at the end
tempArray.push('20 meters');

// copy the contents of tempArray into cargoHold
cargoHold = tempArray;

// print the result
console.log("Adding 1138 at the start and '20 meters' at the end:\n\n" + cargoHold.join(', '));


/********************* Part-5 *********************/
// printing the length of cargoHold
console.log("Length of CargoHold is: " + cargoHold.length);