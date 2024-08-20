import styles from './main.module.css'
import Form from './form/form.jsx'
import Flashcards from './flashcards/flashcards.jsx'
import { useState } from 'react'

const Main = () => {
  const [cards, setCards] = useState([
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    { question: 'What is a component?', answer: 'Reusable piece of UI' },
  ]);
  // add new cards
  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };
  return (
    <main className={styles.main}>
      <Form addCard={addCard}/>
      <Flashcards cards={cards} />
    </main>
  )
}

export default Main
