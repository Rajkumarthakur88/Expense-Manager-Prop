import React, { useState } from "react";
import BalanceSection from "./components/BalanceSection";
import ExpenditureBalance from "./components/ExpenditureBalance";
import IncomeBalance from "./components/IncomeBalance";
import InputForm from "./components/InputForm";
import ListGroup from "./components/ListGroup";
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [manager, setManager] = useState([])
  // console.log(manager)
  const ManageTransaction = (transaction) => {
    // console.log(transaction)
    const newTransaction = {
      id: uuidv4(),
      text: transaction.text,
      amount: parseInt(transaction.amount)
    }
    setManager([...manager, newTransaction])

  }

  // Delete
  const deleteTransaction = (id) => {
    setManager(manager.filter(item => item.id !== id))
  }

  // Edit
  const [Edit, setEdit] = useState({
    id: "",
    text: "",
    amount: "",
    isEdit: false
  })
  const EditTransaction = (transaction) => {
    setEdit({
      id: transaction.id,
      text: transaction.text,
      amount: transaction.amount,
      isEdit: true
    })
  }
  const UpdateTransaction = (id, text, amount) => {
    setManager(manager.map((item) => (item.id === id ? { text, amount } : item)))
    setEdit({
      id: "",
      text: "",
      amount: "",
      isEdit: false
    })
  }
  return (
    <>

      <h1 className="nav">Expense Manager</h1>
      <div className="container">

        <div className="balance-input-section">
          <BalanceSection manager={manager} />
          <InputForm ManageTransaction={ManageTransaction} Edit={Edit} UpdateTransaction={UpdateTransaction} />
        </div>

        <div className="income-expenditure">
          <IncomeBalance manager={manager} />
          <ExpenditureBalance manager={manager} />

        </div>


        <div className="transactions">
          <ListGroup manager={manager} deleteTransaction={deleteTransaction} EditTransaction={EditTransaction} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
