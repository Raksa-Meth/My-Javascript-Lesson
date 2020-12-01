let mAccount = {
    name : 'Raksa Meth',
    expense :  0,
    income : 0
}

let addExpense = function(account,amount){
    account.expense = account.expense + amount
}

let addIncome = function(account,amount){
    account.income = account.income + amount
}

let resetAccount = function(account){
    account.expense = 0
    account.income = 0
}

let getAccountSummary = function(account){
    let name = account.name
    let expense = account.expense
    let income = account.income
    let inbound = income - expense
    let accountSummary = `Account for ${name} has ${inbound}. ${income} in income and ${expense} in expense.`
    return accountSummary
}

addIncome(mAccount,1200)
addExpense(mAccount,500)
addExpense(mAccount,300)
addIncome(mAccount,950)
console.log(getAccountSummary(mAccount))
