import Header from "./components/header/header.jsx";
import Form from "./components/form/form.jsx";
import Flashcards from "./components/flashcards/flashcards.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Form/>
                <Flashcards/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
