import React from 'react'
import { Link } from 'react-router'

const MailboxList = (props) => {
    console.log(props.mailboxes)
    return (
        <div className='mail'>
      {props.mailboxes.map((mailbox) => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
        </div>
      ))}
    </div>
  )
}


export default MailboxList