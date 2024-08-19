## Install plan ✅
    - install react to our project location "(npm create vite@latest . -- --template react) (only first cloner needs to do this)
        - npm install 
        - npm run dev
    - Clear out useless React Junk ✅
        - Create components folder ✅


## Plan objective ##

Aim:
- dynamically add, view, and interact with flashcards. 
- question on one side and an answer on the other. 
- toggle the card to show the question or answer.
- The card should start off showing the question.
    
  
- Design: https://drive.google.com/drive/folders/1Hbdh785tyLd1dQOGtopBlLHYjAxL67ON

- Format: 
App
├── Header
├── Form
├── Flashcards
│ └── Flashcard
└── Footer

Step 1:

- Single component- entire website
- one html file
- one css file

header, form, flashcards (flashcard), footer.

- hardcode flashcard

- build html skeleton
- style said skeleton
- start with one flashcard in html
- hardcode the flashcard
- test it appears
- style this flashcard
- 2nd flashcard appears when first flashcard clicked with  answer (onClick)

Step 2:
- split this into own files

Step 3: (dynamic mode)
- flashcard stored in array of objects
- key:value pair of questn and answer
- to add flashcard add to array.


How the website is meant to work:
- open website
- flashcards and form load
- flashcards with questions first
- create new flashcard using the form ability (search bars)
- check answer by clicking on flashcards shown on screen to switch flashcard to answer Card


parent flashcards = entire thing aka 3 flashcards on screen, child flashcard single flashcard.

Form = seperate component.


