import { useState } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import LetterForm from './components/LetterForm.jsx'
import './App.css'

const App = () => {

  const [letters, setLetters] = useState([])
  const [mailboxes, setMailboxes] = useState([])

  
  const addBox = (formData) => {
    const newMailbox = {
      ...formData,
      _id: mailboxes.length + 1,
    }
    setMailboxes((prevBoxes) => [...prevBoxes, newMailbox])
  }

  const addLetter = (formData) => {
    setLetters([...letters, formData])
  }

  return (
    <>
    <h1>Mailboxes</h1>
   <NavBar />
   <Routes>
    <Route path='/' element={<main><h1>Post Office</h1></main>}/>
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
    <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
    <Route path='/new-letter' element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}/>
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}/>
    <Route path='*' element={<h2>Whoops nothing here!</h2>}/>
   </Routes>
    </> 
  )
}

export default App
