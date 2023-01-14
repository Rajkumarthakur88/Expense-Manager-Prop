import React from 'react'

function ListItem({ transaction, deleteTransaction,EditTransaction }) {
    return (

        <li className={transaction.amount > 0 ? "income list-item" : "expense list-item"}>
            <h2>₹{transaction.amount}</h2>
            <h3>{transaction.text}</h3>

            <span>
                <button className="edit-btn"  onClick={(id) => EditTransaction(transaction)} >
                    Edit
                </button>

                <button className="cancel-btn" onClick={(id) => deleteTransaction(transaction.id)} >
                    <i className="bi bi-x-circle"></i>
                </button>

            </span>
        </li>
    )
}

export default ListItem