import React from 'react'

function ExpenditureBalance({ manager }) {
    const Expenditure = manager.filter((item) => {
        if (item.amount < 0) {
            return item
        }
    }).reduce((p,c)=>{
        return p + c.amount
    },0)
    return (
        <div className="expenditure">
            <h1>EXPENDITURE</h1>
            <h3>₹{Expenditure}</h3>
        </div>
    )
}

export default ExpenditureBalance