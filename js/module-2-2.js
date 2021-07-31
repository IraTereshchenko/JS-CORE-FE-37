/*// Створення
// Function Expression
//myFunc()-не можна викликади до обявлення 
const myFunc = function (param1, param2) {
    // дії, - інструкції, які вконуються
    console.log(`Це функціональний вираз ${param1} & ${param2}`)
    //console.log(param1, param2)

}
// function Declaration
//myFuncDecl() // Можна до  обявлення
function myFuncDecl(param) {
    console.log("Це декларативне заявнення")
}
// Arrow function - ES6
//myArrowFunc() - не можна викликати до обявлення
const myArrowFunc = (param1) => {
    // дії, - інструкції, які вконуються
    console.log('Це стрілочна функція')
}

// Виклик Функції
//myFunc('Hello', 'baby')
//myFuncDecl()
//myArrowFunc()

//Parans & argument
function toSayHello(userName = "User") {
    alert(`${userName}, раді вас вітати на нашому сайті!`)
}
//toSayHello(`Sandra`)
//toSayHello(user)

function showInfo(userName, userAge) {
    console.log(`Hello, my name is ${userName}. I am ${userAge} years old.`)
}
showInfo('Sandra', 31)

// arguments & ....args
//function getResult(param1, param2, paramN) {
//console.log(param1, param2, paramN)
// console.log(param1 + param2 + paramN)
//}
//getResult(0, 1)

function getResult(...allParams) {
    console.log(arguments)
    console.log('allParams', allParams)
    for (let elem of arguments) {
        console.log(elem)
    }
    //arguments.push(1)
    // Перетворення псевдомасиву в повноцінний масив
    const myArgs = Array.from(arguments)
    console.log(myArgs)
    myArgs.push(1)
    console.log(myArgs)
}
getResult(0, 1)

const getArrayRes = (...allParams) => {
    //
    console.log(allParams)

}
getArrayRes(1, 2, 3, 4, 5, 6, 7, 8)

//Guard Clause
function getOddValues(array) {
    console.log(array)


}
getOddValues([1, 2, 3, 4, 5, 6, 7])*/