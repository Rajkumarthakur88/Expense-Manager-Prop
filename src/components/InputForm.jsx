import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function InputForm({ ManageTransaction, Edit,UpdateTransaction }) {
    // console.log(Edit)
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
            if (Edit.isEdit) {
                UpdateTransaction(Edit.id, text, parseInt(amount))
            }
            else {
                ManageTransaction(transaction)
                setText("")
                setAmount("")
            }
        }
    }


    // Edit
    useEffect(() => {
        setText(Edit.text)
        setAmount(Edit.amount)
    }, [Edit])


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