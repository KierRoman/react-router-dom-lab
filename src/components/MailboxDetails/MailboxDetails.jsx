// src/components/MailboxDetails/MailboxDetails.jsx
import React from 'react'
import { useParams } from 'react-router'

const MailboxDetails = (props) => {


    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    if (!selectedBox) {
        return <div>Mailbox not found</div>
    }

    const mailboxLetters = props.letters.filter((letter) => letter.mailboxId === selectedBox._id)

    return (
        <div className='mailbox-details'>
            <h1> Mailbox{mailboxId}</h1>
            <br />
            <h2>Details</h2>
            <p><strong>ID:</strong> {selectedBox._id}</p>
            <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Size:</strong> {selectedBox.boxSize}</p>

<br/>
            <h2>Letters:</h2>
            {mailboxLetters.length === 0 ? (
                <p>No letters for this mailbox yet.</p>
            ) : (
                <ul>
                    {mailboxLetters.map((letter, index) => (
                        <li key={index}>
                            <strong>Recipient:</strong> 
                            <br />
                            {letter.recipient}
                            <br />
                            <strong>Message:</strong> 
                            <br />
                            {letter.message}
                        </li>
                    ))}
                </ul>
            )
        }

        </div>
    )
}

export default MailboxDetails