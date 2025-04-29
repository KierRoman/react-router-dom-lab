import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = (props) => {
    const [boxOwner, setBoxOwner] = useState('')
    const [boxSize, setBoxSize] = useState('Small')


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox({ boxOwner, boxSize })
        setBoxOwner('')
        setBoxSize('Small')

        navigate('/mailboxes')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Box Owner:
                <input
                    type='text'
                    value={boxOwner}
                    onChange={(e) => setBoxOwner(e.target.value)}
                    required
                />
            </label>
            <label>
                Box Size:
                <select
                value={boxSize}
                onChange={(e) => setBoxSize(e.target.value)}
                >
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>
            <button type='submit'>Create Mailbox</button>
        </form>
    )
}


export default MailboxForm