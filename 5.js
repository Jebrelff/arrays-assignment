/********************* Part-1 *********************/
let str = 'In space, no one can hear you code.'

// print the str
console.log("str:\n\n" + str)

// print the result of split
console.log("str.split():\n\n" + str.split())
console.log("str.split('e'):\n\n" + str.split('e'))
console.log("str.split(' '):\n\n" + str.split(' '))
console.log("str.split(''):\n\n" + str.split(''))

// print the purpose
console.log('Purpose of parameter inside split is to split the string on that character. If no parameter is passed, it splits on every character. If empty string is passed, it splits on every character but returns an array of characters instead of strings.')


/********************* Part-2 *********************/
let arr = ['B', 'n', 'n', 5]

// print the array
console.log("arr:\n\n" + arr)

// print the result of join
console.log("arr.join():\n\n" + arr.join())
console.log("arr.join('e'):\n\n" + arr.join('e'))
console.log("arr.join(' '):\n\n" + arr.join(' '))
console.log("arr.join(''):\n\n" + arr.join(''))

// print the purpose
console.log('Purpose of parameter inside join is to join the array elements with that character. If no parameter is passed, it joins the elements with a comma. If empty string is passed, it joins the elements without any character in between.')


/********************* Part-3 *********************/
// printing the original array and string
console.log('Original array:\n\n' + arr)
console.log('Original string:\n\n' + str)

console.log('Do split or join change the original string/array? No, it does not.')


/********************* Part-4 *********************/
// Alphabetize these hold contents: “water,space suits,food,plasma sword,batteries”, and then combine them into a new string.
let items = "water,space suits,food,plasma sword,batteries";

// print the items
console.log("items:\n\n" + items);

// Split the items into an array
let itemsArray = items.split(',');

// Alphabetize the array
itemsArray.sort();

// Combine the sorted array into a new string
let sortedItems = itemsArray.join(',');

// Print the result
console.log("Alphabetizing the items and combining them into a new string:\n\n" + sortedItems);
