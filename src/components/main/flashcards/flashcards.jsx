/* eslint-disable react/prop-types */
import styles from './flashcards.module.css'
import FlashCard from './flashcard/flashcard.jsx'
const FlashCards = ({ cards }) => {
  return (
    <>
      <section className={styles.flashCards}>
        {cards.map((card) => {
          return <FlashCard key={card.question} card={card} />
        })}
      </section>
    </>
  )
}

export default FlashCards
