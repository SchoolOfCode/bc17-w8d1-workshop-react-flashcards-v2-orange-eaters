function App() {
    const questions = [
        {question: "What is React?", answer: "React is a javascript library"},
        {question: "What is JSX?", answer: "JSX is a javascript library"},
        {question: "What is OISHVLKNA?", answer: "JSX is a javascript library"},
    ];


    return (
        <>
            <header>
                <img src="logo_dark.svg" alt="React Logo"/>
                <h1>React Flashcards</h1>
        <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
      </header>
      <main>
        <form>
          <label>Question:</label>
          <input type="text" />
          <label>Answer:</label>
          <input type="text" />
          <button type="submit">Add</button>
        </form>
        <section className="flashCards">
            {questions.map((question) => {
                return <div className="flashCard" key={question.question}>
                    <p>🤔</p>
                    <p>{question.question}</p>
                </div>
            })}
        </section>
      </main>
      <footer>
        <p>Build with React  <img src="logo_dark.svg" alt="React Logo" />
        </p>
      </footer>
    </>
  );
}

export default App;
