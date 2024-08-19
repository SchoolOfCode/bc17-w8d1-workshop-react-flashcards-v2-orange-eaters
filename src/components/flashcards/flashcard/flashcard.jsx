const FlashCard = () => {
    const questions = [
        {question: "What is React?", answer: "React is a javascript library"},
        {question: "What is JSX?", answer: "JSX is a javascript library"},
        {question: "What is OISHVLKNA?", answer: "JSX is a javascript library"},
    ];
    return (
        <>
            {questions.map((question) => {
                return <div className="flashCard" key={question.question}>
                    <span className="deleteFlashCard">x</span>
                    <p>🤔</p>
                    <p>{question.question}</p>
                </div>
            })}
        </>
    )
}

export default FlashCard;