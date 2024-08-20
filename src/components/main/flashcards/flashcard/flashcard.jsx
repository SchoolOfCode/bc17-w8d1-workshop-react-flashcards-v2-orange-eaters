/* eslint-disable react/prop-types */
import styles from './flashcard.module.css'
import { useState } from 'react'

const FlashCard = ({ card }) => {
  // flipped status
  const [flipped, setFlipped] = useState(false)
//function to flip
  const toggleCard = () => {
    setFlipped(!flipped)
  }
  // function to delete
  const handleDeleteClick = () => {
    console.log('Ive been clicked')
  }
// return
  return (
    <>
      {flipped ? (
        <div className={styles.flashCard} onClick={toggleCard}>
          <span className={styles.deleteFlashCard} onClick={() => handleDeleteClick()}>x</span>
          <p>🍕</p>
          <p>{card.answer}</p>
        </div>
      ) : (
        <div className={styles.flashCard} onClick={toggleCard}>
          <span className={styles.deleteFlashCard} onClick={() => handleDeleteClick()}>x</span>
          <p>🤔</p>
          <p>{card.question}</p>
        </div>
      )}
    </>
  )
}

export default FlashCard
