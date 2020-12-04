let name = 'Raksa Meth'

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//if the letters are include in the string
console.log(name.includes('Raksa'))

//trim
let mString = '    Hello World'
console.log(mString.trim())

// excercise : validate the password which should be more than 8 letters and doesn't contain the word password
let validatePassword = function(inputedPassword) {
    let formatedInputedPassword = inputedPassword.toLowerCase()
    let isValidPassword = formatedInputedPassword.length >= 8 && !(formatedInputedPassword.includes('password'))
    if(isValidPassword){
        console.log('Password is valid')
    }else {
        console.log('Password is not valid')
    }
}

validatePassword('passWord567@')
validatePassword('335YuIPMB')