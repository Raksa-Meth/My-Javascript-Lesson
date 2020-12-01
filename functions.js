
let getUser = function(){
    console.log('Welcome, User!')
}

//call function
getUser()

//function with parameters
let getMultipleUser = function (user1, user2) {
    console.log('Hello!'+ user1 + 'and'+ user2)
}
//call function with argument or input parameter
getMultipleUser('UserA','UserB')

//return value function
let getChicken = function(){
    return 'You got chicken'
}

console.log(getChicken())

//function with default parameter
let mDefaultParameter = function(gender = '5'){
    console.log(gender)
}

mDefaultParameter();