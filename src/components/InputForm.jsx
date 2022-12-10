import { useState } from 'react'
import { toast } from 'react-toastify'

function InputForm({ ManageTransaction }) {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const transaction =
        {
            text: text,
            amount: amount
        }
        if (text === "") {
            toast.error("Please Fill  All Input Fields")
        }
       else if (amount === "") {
            toast.error("Please Fill  All Input Fields")
        }
        else {
            ManageTransaction(transaction)
            setText("")
            setAmount("")
        }
    }





    return (
        <div className="input-section">
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter Your Amount" />
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter Your Transaction" />
                <button className="submit-btn">SUBMIT</button>
            </form>
        </div>
    )
}

export default InputForm