import {useState} from 'react';


export default function Form () {
// const [ typeQuestion, setQuestion] = useState (null);
// const [typeAnswer, setAnswer] = useState (null);


function handleClick(event) {
    event.preventDefault()
console.log(event.target.value)
}




    return (
        <>
            <form onSubmit={handleClick}>
                <label>Question:</label>
                <input type="text"/>
                <label>Answer:</label>
                <input type="text"/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

