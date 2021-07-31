/*// Variables
// ES5
var myFirstVar
console.log("myFirstVar:", myFirstVar) //undefined

//ES6
let mySecondVar;
console.log("mySecondVar:", mySecondVar); //undefined;
mySecondVar = "var by let";
console.log("mySecondVar:", mySecondVar); //undefined;

const myThirdVar = 'variable by const';
console.log(myThirdVar)
//myThirdVar = "ererfvd" // Не можна змінювати

// Primitives
console.log(undefined);
console.log(typeof undefined);

console.log('Iryna Tereshchenko');
console.log(typeof 'Iryna Tereshchenko');

console.log(100);
console.log(typeof 100);

console.log(true);
console.log(typeof true);
console.log(false);
console.log(typeof false);

console.log(null);
console.log(typeof null);

// Приведение типов
//null
//uundefined;

// до цих типів можна привести любе значення
//string
let value;
console.log(value, typeof value);
value = String(value);
console.log(value, typeof value);

value = 77;
console.log(value, typeof value);
value = String(value);
console.log(value, typeof value);

value = true;
console.log(value, typeof value);
value = value + ""; //конкатенація
console.log(value, typeof value);

//number
value = "Tereshchenko"
console.log(value, typeof value);

value = Number(value)
console.log(value, typeof value);
// NaN - not a number

value = "11"
value = Number(value)
console.log(value, typeof value);

value = false
console.log(value, typeof value);

value = false
value = +value
console.log(value, typeof value);

value = true
console.log(value, typeof value);

value = Number(value)
console.log(value, typeof value);

//boolean
value = '' //false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = ' ' //true
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = "Iryna" //true
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = 1 //true
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = 0 //false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = NaN  //false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = null //false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = undefined //false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

value = false
console.log(value, typeof value);

value = Boolean(value)
console.log(value, typeof value);

// 6 false  values

console.log("false", '')
console.log("false", 0)
console.log("false", NaN)
console.log("false", null)
console.log("false", undefined)
console.log("false", false)

// повідомлення користовачу
//let response = alert('Hello')
//ok => undefined


//let response = confirm("Вам виповнилося 18?")
// ok => true
// cansel => false
//console.log(response)

//let response = prompt("Введите пожалуста число")
//console.log(response)
//ok=> value
//cancel => null

// основні оперкатори (математика і порівняння)
console.log(1 + 1)
console.log(2 - 1)
console.log(3 * 4)
console.log(10 / 2)

console.log(2 ** 3)
console.log(10 % 4)

console.log(2 > 4)
console.log(2 >= 2)

// не строга  рівність (порівняння)
console.log("'1' == 1", '1' == 1) //true
// string == number тому що приведення типів відбулося
console.log('true == 1', true == 1)
console.log('false == 0', false == 1)

// не строга  нерівність (порівняння)
console.log("'1' != 1", '1' != 1) //false
// string == number тому що приведення типів відбулося
console.log('true != 1', true != 1) //false
console.log('false != 0', false != 0) //false


// строга рівність (порівняння)
console.log('1' === 1) //false
// string === number
console.log(1 === 1) //true
console.log('true === 1', true === 1)
console.log('false === 0', false === 1)

// строга нерівність (порівняння)
console.log('1' !== 1) //true
// string === number
console.log(1 !== 1) //false
console.log('true !== 1', true !== 1) //true
console.log('false !== 0', false !== 0) //true

//строки
console.log("Hello")
console.log('Hello')
console.log(`Hello`)


let name = "Iryna"
let message = "Hello, " + name
console.log(message)

name = 'Olga'
message = "Hello, " + name
console.log(message)

// `${}` - шаблобная строка і інтерполяція

message = `Hi, ${name}!`
console.log(message)

// concat
let nameInDB = 'tereshchenko'
console.log(nameInDB.toUpperCase())
let lastName = "Tereshchenko"
console.log(lastName.toLowerCase())

//lenght
console.log(lastName.length)

// includes() & indexOF()
const myLove = 'I Love JavaScript!!!'
console.log(myLove)

console.log(myLove.includes('Love')) //true
console.log(myLove.includes('love')) //false

console.log(myLove.indexOf('Love')) //2- index
console.log(myLove.indexOf('love')) //-1 якщо не вийшло співпадіння

// числа*/