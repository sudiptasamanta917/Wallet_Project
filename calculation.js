// let localStorage = [
//     {time : 1649757849234,amount : 2000,note : "sudipta samanta"},
//     {time : 1649757849234,amount : 2000,note : "sudipta samanta"},
//     {time : 1649757849234,amount : 3000,note : "abhishek"},
//     {time : 1649757849234,amount : 4000,note : "susovan"},
//     {time : 1649757849234,amount : 5000,note : "subhadeep"}
// ];

// let localStorageBalance = 1000;

function getBalance(){
    let currentBalance =  Number(localStorage.getItem("balance"));
    return currentBalance;
}

function getTransaction() {
    let currentTransaction = JSON.parse(localStorage.getItem("transaction"));
    console.log(currentTransaction);
    return currentTransaction;
}

function addBalance(balance){
    let localStorageBalance = getBalance()
    localStorageBalance += balance;
    localStorage.setItem("balance", localStorageBalance);
}

function addTransaction(amount, type, note = ''){
    let transaction = getTransaction();
    transaction.unshift({time : Date.now(), amount : amount, note : note, type : type});
    localStorage.setItem("transaction", JSON.stringify(transaction));
}