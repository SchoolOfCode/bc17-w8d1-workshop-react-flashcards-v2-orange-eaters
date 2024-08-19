function App() {
  return (
    <>
      <header>
        <img src="logo_dark.svg" alt="React Logo" />
        <h1>React Flashcards</h1>
        <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
      </header>
      <main>
        <form>
          <label for="name">Question:</label>
          <input type="text" />
          <label for="name">Answer:</label>
          <input type="text" />
          <button type="submit">Add</button>
        </form>
        <section className="flashCards">
            <div className="flashCard">
                <p>🤔 What is React?</p>
            </div>
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
