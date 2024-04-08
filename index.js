const history = document.querySelector(".part3");
const balance = document.querySelector("#balance");

const spendInput = document.querySelector("#spendInput");
const spendButton = document.querySelector("#spButton");
const spendNoteInput = document.querySelector("#note1Input");

const earnButton = document.querySelector("#enButton");
const earnInput = document.querySelector("#earnInput");
const earnNoteInput = document.querySelector("#note2Input");

const clearButton = document.querySelector("#clearButton");

if(localStorage.getItem("balance") === null){
    localStorage.setItem("balance", 0);
}

if(localStorage.getItem("transaction") === null){
    localStorage.setItem("transaction", JSON.stringify([]));
}

renderBalance();
renderTransaction();

spendButton.addEventListener("click",function(event){
    let dataType = parseInt(spendInput.value);
    if(! isNaN(dataType)){
        addBalance(Number(-spendInput.value));
        addTransaction(Number(spendInput.value), "spend", spendNoteInput.value);

        renderBalance();
        renderTransaction();
    }
    

    spendInput.value = "";
    spendNoteInput.value = "";
});

earnButton.addEventListener("click",function(event){
    let dataType2 = parseInt(earnInput.value);
    if(! isNaN(dataType2)){
        addBalance(Number(earnInput.value));
        addTransaction(Number(earnInput.value), "earn", earnNoteInput.value);
    
        renderBalance();
        renderTransaction();
    }
    earnInput.value = "";
    earnNoteInput.value = "";
});

// document.addEventListener('DOMContentLoaded', function() {
//     const firstDivElement = document.querySelector('.part3 div:first-child');
//     if(spendInput.value){
//         if (firstDivElement) {
//             firstDivElement.style.backgroundColor = 'red'; 
//         } 
//     }
//     else if(earnInput.value){
//         if (firstDivElement) {
//             firstDivElement.style.backgroundColor = 'lightgreen'; 
//         }
//     }
// });

clearButton.addEventListener("click",function(event){
    localStorage.setItem("balance", 0);
    localStorage.setItem("transaction", JSON.stringify([]));
    renderBalance();
    renderTransaction();
});