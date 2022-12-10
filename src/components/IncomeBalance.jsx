import React from 'react'

function IncomeBalance({ manager }) {
    const Income = manager.filter((item) => {
        if (item.amount > 0)
         { return item }
    }).reduce((p, c) => {
        return p + c.amount
    }, 0)

    return (
        <div className="income-amount">
            <h1>INCOME</h1>
            <h3>₹{Income}</h3>
        </div>
    )
}

export default IncomeBalance