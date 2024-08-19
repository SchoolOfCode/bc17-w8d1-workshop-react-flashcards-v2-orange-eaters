/* eslint-disable react/prop-types */
import styles from './flashcard.module.css'
import { useState } from 'react'

const FlashCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false)

  const toggleCard = () => {
    setFlipped(!flipped)
  }

  return (
    <>
      {flipped ? (
        <div className={styles.flashCard} onClick={toggleCard}>
          <span className={styles.deleteFlashCard}>x</span>
          <p>🍕</p>
          <p>{card.answer}</p>
        </div>
      ) : (
        <div className={styles.flashCard} onClick={toggleCard}>
          <span className={styles.deleteFlashCard}>x</span>
          <p>🤔</p>
          <p>{card.question}</p>
        </div>
      )}
    </>
  )
}

export default FlashCard
