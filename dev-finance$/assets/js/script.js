const transactions = [
    {
        id: 1,
        description: "luz",
        amount:-50000,
        date: "20/04/21",
    },
    {
        id: 2,
        description: "criação website",
        amount:500000,
        date: "20/04/21",
    },
    {
        id: 3,
        description: "internet",
        amount: -20000,
        date: "20/04/21",
    },
    {
        id: 4,
        description: "App",
        amount: 200000,
        date: "20/04/21",
    }
    
]

const Transaction = {
    incomes () {
        let income = 0
        transactions.forEach( transaction =>{
            if(transaction.amount > 0){
                income += transaction.amount;
            }
        }) 
        return income
    },
    expenses () {
        let expense = 0
        transactions.forEach( transaction =>{
            if(transaction.amount < 0){
                expense += transaction.amount;
            }
        }) 
        return expense
    },

    total () {
        return Transaction.incomes() + Transaction.expenses();
    },
}

const dom = {
    transactionContainer: document.querySelector("#data-table tbody"),
    
    addTransaction(transaction, index){
        const tr = document.createElement("tr")
        tr.innerHTML = dom.innerHtmlTransaction(transaction)

        dom.transactionContainer.appendChild(tr)
        
    },

    innerHtmlTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount= utils.formatyCurrency(transaction.amount)

        const html =`
            <td class="info">${transaction.description}</td>
            
            <td class="${CSSclass}">${amount}</td>
            <td class="date"> ${transaction.date}</td>
            <td>
                <img src="./assets/imgs/minus.svg" alt="remover Transações">
            </td>
        `
        return html
    },

    updateBalance (){
        document
        .querySelector("#incomeDisplay")
        .innerText = utils.formatyCurrency(Transaction.incomes());

        document
        .querySelector("#expenseDisplay")
        .innerHTML =utils.formatyCurrency(Transaction.expenses());

        document
        .querySelector("#totalDisplay")
        .innerHTML = utils.formatyCurrency(Transaction.total());
    }
    
}
// trick pra trabalar com valor monetario (guardar x100)
const utils = {
    formatyCurrency(value){
       const signal = Number(value) < 0 ? "-":"";

       value = String(value).replace(/\D/g,'');
       value = Number(value) / 100;
       value = value.toLocaleString("pt-BR",{
            style: "currency",
            currency:"BRL"
       });
       return signal + value 
    }
    
}

transactions.forEach(function(transaction){
    dom.addTransaction(transaction)
})

dom.updateBalance()