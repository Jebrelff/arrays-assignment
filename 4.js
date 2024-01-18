let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

// print the arrays
console.log("holdCabinet1:\n\n" + holdCabinet1.join(', '));
console.log("holdCabinet2:\n\n" + holdCabinet2.join(', '));

/********************* Part-1 *********************/
holdCabinet1 = holdCabinet1.concat(holdCabinet2)

// print the result
console.log('After Concatenation, holdCabinet1:\n\n' + holdCabinet1.join(', '));


/********************* Part-2 *********************/
// slice of 2 elements of both arrays
let slice1 = holdCabinet1.slice(0, 2);
let slice2 = holdCabinet2.slice(0, 2);

// print the result
console.log('Slice of holdCabinet1:\n\n' + slice1.join(', '));
console.log('Slice of holdCabinet2:\n\n' + slice2.join(', '));

// print the arrays
console.log('After slicing, holdCabinet1:\n\n' + holdCabinet1.join(', '));
console.log('After slicing, holdCabinet2:\n\n' + holdCabinet2.join(', '));

// Does slice alter the original arrays
console.log('Does slice alter the original arrays? No, it does not.');

/********************* Part-3 *********************/
// reverse the first array, and sort the second.
console.log('Reversing the first array:\n\n' + holdCabinet1.reverse().join(', '));
console.log('Sorting the second array:\n\n' + holdCabinet2.sort().join(', '));

// print the arrays
console.log('After reversing, holdCabinet1:\n\n' + holdCabinet1.join(', '));
console.log('After sorting, holdCabinet2:\n\n' + holdCabinet2.join(', '));

// Does reverse and sort alter the original arrays
console.log('Does reverse and sort alter the original arrays? Yes, it does.');
