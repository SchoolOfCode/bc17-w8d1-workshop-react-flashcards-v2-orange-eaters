import styles from './header.module.css'
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <img src="/public/logo_dark.svg" alt="React Logo" className={styles.headerImg}/>
                <h1>React Flashcards</h1>
                <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
            </header>
        </>
    )
}

export default Header;