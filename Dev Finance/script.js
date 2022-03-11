const Modal = {
    open(){
        // Open modal
        //Add a class active to modal

        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close(){
        //close modal
        //remove a class active to modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [{
    id:1,
    description: 'Energy',
    amount: -50000,
    date:'01/01/2022'
},{},{}]
const transactions = [{
    id:1,
    description: 'Website Construction',
    amount: -50000,
    date:'01/01/2022'
},{},{}]
const transactions = [{
    id:1,
    description: 'Internet',
    amount: -20000,
    date:'01/01/2022'
}]

const Transaction = {
    incomes(){
        //add incomes
    },
    expenses(){
        //add expenses
    }
    total(){
        //incomes - expenses
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#date-tabletbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML= DOM.innerHTMLTransaction(transaction)
        console.log(tr.innerHTML)

        DOM.transactionsContainer.appendChild(tr)
    },
    innacerHTMLTranstion(transaction){
        const CSSclass =  transactopn.amout > 0 ? "income" : "expense"
        const amout = Utils.formatCurrency(transaction.amout)
        const html = `
        <tr>
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remove Transaction" />
              </td>
            </tr>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0? "-" : ""
        value = String(value).replace("0","Discover")

        console.log()
    }
}
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})