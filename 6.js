/********************* Part-1 *********************/
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]


// print the arrays
console.log("element1:\n\n" + element1)
console.log("element2:\n\n" + element2)
console.log("element26:\n\n" + element26)

/********************* Part-2 *********************/
let table = []
table.push(element1)
table.push(element2)
table.push(element26)

// print the table
console.log("table:\n\n" + table)

/********************* Part-3 *********************/
console.log('table[1]: ' + table[1])
console.log('table[1][1]: '+ table[1][1])

/********************* Part-4 *********************/
// print the mass of element1, the name for element 2 and the symbol for element26.
console.log('Mass of element1: ' + table[0][2])
console.log('Name for element2: ' + table[1][0])
console.log('Symbol for element26: ' + table[2][1])

/********************* Part-5 *********************/

/********************* Part-6 *********************/
let threeDimensionalArray = [
    [['Apple', 'A'], ['Meta', 'M']],
    [['Google', 'G'], ['Microsoft', 'M']]
    [['Cisco', 'C'], ['X', 'X']]
];

// print one entry from each level
console.log('Level 1: ' + threeDimensionalArray[0]);
console.log('Level 2: ' + threeDimensionalArray[0][0]);
console.log('Level 3: ' + threeDimensionalArray[0][0][0]);
