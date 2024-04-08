
function renderBalance(){
    balance.innerHTML = getBalance();
}

function renderTransaction(){
    clearRenderTransaction();

    const transactions = getTransaction();
    for(let transaction of transactions){
        renderSingleTransaction(transaction);
    }
}

function clearRenderTransaction(){
    while( history.firstChild ) {
        history.firstChild.remove();
    }
}

function renderSingleTransaction(transaction){
    const subDiv = document.createElement("div");
    subDiv.classList.add( transaction.type + '-history' );
    history.appendChild(subDiv);

    const element1 = document.createElement("div");
    const element2 = document.createElement("div");
    subDiv.appendChild(element1);
    subDiv.appendChild(element2);

    const subEle1 = document.createElement("div");
    const subEle2 = document.createElement("div");
    element1.appendChild(subEle2);
    element1.appendChild(subEle1);

    subEle1.textContent =formatTimestamp(transaction.time);
    subEle2.textContent ="$" + transaction.amount;
    element2.textContent =transaction.note;
}

function formatTimestamp(timestamp) {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);

    // Extract date and time components from the Date object
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    // Create a formatted date and time string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}


