let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

// print the array
console.log("cargoHold:\n\n" + cargoHold.join(', '));

/********************* Part-1 *********************/
// insert 'keys' at index 3 in cargoHold
let tempArray = [cargoHold[0], cargoHold[1], 'keys'];

// copy the cargoHold into the tempArray without the first 2 elements
for(let index = 2; index < cargoHold.length; index++) {
    tempArray.push(cargoHold[index]);
}

// copy the contents of tempArray into cargoHold
cargoHold = tempArray;

// print the result
console.log("After Inserting 'keys' at index 3:\n\n" + cargoHold.join(', '));


/********************* Part-2 *********************/
// remove ‘instruction manual’ from the cargoHold
tempArray = []

// copy the cargoHold into the tempArray without the 'instruction manual'
for(let index = 0; index < cargoHold.length; index++) {
    if(cargoHold[index] !== 'instruction manual') {
        tempArray.push(cargoHold[index]);
    }
}

// copy the contents of tempArray into cargoHold
cargoHold = tempArray;

// print the result
console.log("After Removing 'instruction manual':\n\n" + cargoHold.join(', '));

/********************* Part-3 *********************/
// Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'.
cargoHold[2] = 'cat';
cargoHold[3] = 'fob';
cargoHold[4] = 'string cheese';

// print the result
console.log("After Replacing the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese':\n\n" + cargoHold.join(', '));
