import React from 'react'

function BalanceSection({ manager }) {
    
    const Balance = manager.reduce((p, c) => 
    { return p + c.amount }, 0)

    return (
        <div className="balance-section">
            <h1>BALANCE</h1>
            <h2>₹{Balance}</h2>
        </div>
    )
}

export default BalanceSection