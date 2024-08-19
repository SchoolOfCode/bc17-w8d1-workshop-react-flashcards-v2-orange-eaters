import styles from './main.module.css'
import Form from './form/form.jsx'
import Flashcards from './flashcards/flashcards.jsx'
import { useState } from 'react'

const Main = () => {
  const [cards, setCards] = useState([
    {
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.',
    },
    {
      question: 'What are components in React?',
      answer:
        'Components are the building blocks of a React application. They can be functional or class-based, and they return a piece of UI that is rendered to the DOM.',
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML and is used to describe what the UI should look like in React.',
    },
    {
      question: 'What is the virtual DOM?',
      answer:
        'The virtual DOM is a lightweight copy of the actual DOM that React keeps in memory. It allows React to efficiently update and render components by calculating the difference between the previous and current states of the DOM.',
    },
    {
      question: 'What are props in React?',
      answer:
        'Props, short for properties, are inputs to a React component. They are used to pass data from one component to another, typically from a parent to a child component.',
    },
    {
      question: 'What is state in React?',
      answer:
        'State is an object that holds information that can change over the lifetime of a component. Unlike props, state is managed within the component and can be updated using the setState method.',
    },
    {
      question: 'What is the difference between state and props?',
      answer:
        'Props are immutable and passed from parent to child components, while state is mutable and managed within the component. State can be changed using setState, and these changes trigger a re-render.',
    },
    {
      question: 'What are React hooks?',
      answer:
        'Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext.',
    },
    {
      question: 'What is useEffect in React?',
      answer:
        'useEffect is a hook that lets you perform side effects in functional components, such as fetching data or updating the DOM. It can run after every render or conditionally based on dependencies.',
    },
    {
      question: 'How do you handle events in React?',
      answer:
        'Event handling in React is similar to handling events in plain JavaScript, but with some differences. You use camelCase syntax for event names, and you pass the event handler function as an expression inside curly braces.',
    },
  ])
  return (
    <main className={styles.main}>
      <Form setter={setCards} />
      <Flashcards cardData={cards} />
    </main>
  )
}

export default Main
