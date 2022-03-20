var state ={
    balance: 50000,
    income: 600,
    expense: 800,
    transaction: [
        {name:"Salary", amount:5000,type:"income"},
        {name:"Buy Grocery", amount:50,type:"expense"},
        {name:"Buy Guitar", amount:50,type:"expense"},
    ]
}
 
// SELECTORS
const incomeBalance =document.querySelector("#income-balance");
const incomeAmount =document.querySelector("#income-amt");
const expenseAmount =document.querySelector("#expense-amt");
const transactionsEl = document.querySelector("#transaction");
const transactionBtn = document.querySelector(".submit-btn");
// const selectTransaction = document.querySelector("select");
const textInput = document.querySelector("#input-1");
const amountInput = document.querySelector("#input-2");

//EVENT LISTENERS
// transactionBtn.addEventListener("click", addTransactionClick)


function init () {
    updateState();
    initListners();
    // render();
}

function initListners() {
transactionBtn.addEventListener("click", addTransactionClick);
}

function addTransactionClick(e){
    e.preventDefault();
    let transaction = {
        name: textInput.value,
        amount:parseInt(amountInput.value),
    };

    state.transaction.push(transaction);
    console.log(state);
    updateState();
}

function updateState() {
    let balance = 0,
        income = 0,
        expense = 0,
        item; 

    for (let i = 0; i <state.transaction.length; i++) {
        item = state.transaction[i];

        if (item.type ==="income") {
             income += item.amount;
        }else if (item.type ==="expense") {
             expense += item.amount;
        }
        
    }
        balance = income - expense;
        console.log(balance, income, expense);
        state.balance = balance;
        state.income = income;
        state.expense =  expense;
        render();
        
}



function render () {
    incomeBalance.innerHTML = `₦${state.balance}`;
    incomeAmount.innerHTML = `+₦${state.income}`;
    expenseAmount.innerHTML = `-₦${state.expense}`;

    //Targeting the Ul element Transaction history

    let transactionEl, containerEl, amountEl, item , btnEl;
    transactionsEl.innerHTML = "";
    for (let i = 0; i <state.transaction.length; i++) {
        item = state.transaction[i];

        transactionEl = document.createElement("li");
        transactionEl.append(state.transaction[i].name);
        transactionsEl.appendChild(transactionEl);
        //DIV----------------------------
        containerEl = document.createElement("div");

        //SPAN---------------------------
        amountEl = document.createElement("span");

        if (item.type ==="income") {
            amountEl.classList.add("income-amt")
        } else if (item.type === "expense") {
            amountEl.classList.add("expense-amt");
        }
        amountEl.innerHTML = `₦${item.amount}`;

        //append to div
        containerEl.appendChild(amountEl);

        btnEl = document.createElement("button");
        btnEl.innerHTML = '<i class="fas fa-trash"></li>';

        //APPEND TO DIV 
        containerEl.appendChild(btnEl);
        transactionEl.appendChild(containerEl);
    }
}


init();


