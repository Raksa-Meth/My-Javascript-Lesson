let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 10

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)