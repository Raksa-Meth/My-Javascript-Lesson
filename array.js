//create array and init the value
let mArray = ['one','two','three','four']

//add more element to the array
mArray.push('five')
//remove element
mArray.pop()
//access array
console.log(mArray[0])
console.log(mArray[1])

//loop each item
mArray.forEach(function(item,index){
    let currentMessage = `${index}. ${item}`
    console.log(currentMessage)
})

