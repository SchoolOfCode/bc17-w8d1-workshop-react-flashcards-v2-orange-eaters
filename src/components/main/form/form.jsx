import {useState} from "react";
import styles from './form.module.css'
// eslint-disable-next-line react/prop-types
function Form({addCard}) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents default action (refresh)
        if (question && answer) {  // checking if both question and answer forms are valid
            const newCard = {question, answer};  // Creating structure of new cards
            addCard(newCard);             // adding card to the state
            // resets form on submit
            setQuestion('');
            setAnswer('');
        }
        return alert('fill both question and answer')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className={styles.inputField}
                />
            </label>
            <br/>
            <label>
                Answer:
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className={styles.inputField}
                />
            </label>
            <br/>
            <button type="submit" className={styles.addBtn}>Add Card</button>
        </form>
    );
}

export default Form;