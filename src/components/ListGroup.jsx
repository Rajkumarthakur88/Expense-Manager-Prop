import React from 'react'
import ListItem from './ListItem'

function ListGroup({manager,deleteTransaction}) {

    return (

        <ul className='listgroup'>
            {/* <li className="income transaction">
                <h2>₹500</h2>
                <h3>Stocks</h3>
                <button className="cancel-btn">
                    <i className="bi bi-x-circle"></i>
                </button>
            </li> */}
            {
                manager.map((transaction)=><ListItem transaction={transaction} deleteTransaction={deleteTransaction} />)
            }
        </ul>
    )
}

export default ListGroup