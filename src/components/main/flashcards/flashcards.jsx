/* eslint-disable react/prop-types */
import styles from './flashcards.module.css'
import FlashCard from './flashcard/flashcard.jsx'
const FlashCards = ({ cardData }) => {
  return (
    <>
      <section className={styles.flashCards}>
        {cardData.map((card) => {
          return <FlashCard card={card} key={card.question} />
        })}
      </section>
    </>
  )
}

export default FlashCards
