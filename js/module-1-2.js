/*function findLongestWord(string) {
    const stringSplit = string.split(' ')
    let longestWord = ""
    for (const word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord

    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
}*/
//22
/*function createArrayOfNumbers(min, max) {
  const numbers = [];
  for(let i = min;  i <= max; i++)
    numbers.push(i);
  return numbers;
}

console.log(createArrayOfNumbers(1,3));
console.log(createArrayOfNumbers(14,17));
console.log(createArrayOfNumbers(29,34));
//23
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  
  

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

function filterArray(numbers, value) {
   // Change code below this line

    let newArr = [];
  for (const number of numbers) {
    if (number > value) {
      newArr.push(number);
    }
  }
  return newArr;

  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

//24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}
console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));

//25
function getCommonElements(array1, array2) {
  // Change code below this line
const common = [];
  for (let i of array1){
    if(array2.includes(i)){
      common.push(i);}
  }
        return common;
        


 // Change code above this line
}
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

//26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}
//заміна




//27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
   let newArr = [];
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;

  

 
  // Change code above this line
}
  //28
  // Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;


//29
function getEvenNumbers(start, end) {
   // Change code below this line
let evenNumbers = []
for (let i = start; i <= end; i +=1) {
  if (i%2 ===0) {
evenNumbers.push(i);
  }
}
return evenNumbers;
    // Change code above this line
}
  

//30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


//31
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  
  // Change code above this line
}
*/

