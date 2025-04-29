import { useState } from "react"
import { useNavigate } from "react-router"

const LetterForm = (props) => {
    const [mailboxId, setMailboxId] = useState('')
    const [recipient, setRecipient] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newLetter = {mailboxId: Number(mailboxId), recipient, message}
        props.addLetter(newLetter)
        setMailboxId('')
        setRecipient('')
        setMessage('')

        navigate(`/mailboxes/${mailboxId}`)
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Select Mailbox:
            <select
            value={mailboxId}
            onChange={(e) => setMailboxId(e.target.value)}
            required
            >
                <option value='' disabled>Select a mailbox</option>
                {props.mailboxes.map((mailbox) => (
                    <option key={mailbox._id} value={mailbox._id}>
                        Mailbox {mailbox._id} - {mailbox.boxOwner}
                    </option>
                ))}
            </select>
        </label>

        <label>
            Recipient:
            <input
            type='text'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required/>
        </label>

        <label>
            Message:
            <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            />
        </label>

        <button type='submit'>Send Letter</button>
        </form>
    )
}

export default LetterForm