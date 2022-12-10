import React from 'react'

function ListItem({transaction,deleteTransaction}) {
    return (

        <li className={transaction.amount > 0 ? "income list-item" : "expense list-item"}>
            <h2>₹{transaction.amount}</h2>
            <h3>{transaction.text}</h3>
            <button className="cancel-btn" onClick={(id)=>deleteTransaction(transaction.id)} >
                <i className="bi bi-x-circle"></i>
            </button>
        </li>
    )
}

export default ListItem