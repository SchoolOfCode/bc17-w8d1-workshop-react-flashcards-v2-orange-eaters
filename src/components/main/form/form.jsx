import styles from './form.module.css'

export default function Form() {
  //setter
  function handleClick(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    console.log(formData)
  }

  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <label>
          Question:
          <input
            type='text'
            className={styles.inputField}
            onChange={(e) => handleChange(e)}
            name='question'
            id='question'
          />
        </label>

        <label>
          Answer:
          <input
            type='text'
            className={styles.inputField}
            onChange={(e) => handleChange(e)}
            name='answer'
            id='answer'
          />
        </label>

        <button type='submit' className={styles.addBtn}>
          Add
        </button>
      </form>
    </>
  )
}
