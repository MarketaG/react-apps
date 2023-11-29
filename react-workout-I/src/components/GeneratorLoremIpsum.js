import { useState } from "react"
import data from "../data/dataGenerator"
import ShowTools from "../components/ShowTools"
import CodeImage4 from "../images/code_4.png"
import "./GeneratorLoremIpsum.css"

const GeneratorLoremIpsum = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
    let amount = parseInt(count)

    //checking and generating values
    if (amount < 0) {
      amount = 0
    } else if (amount > 5) {
      //generating text as many times as needed
      const generatedText = [];
      while (generatedText.length < amount) {
        generatedText.push(data[generatedText.length % 5]);
      }
      setText(generatedText);
    } else {
      setText(data.slice(0, amount));
    }
  };

  const formReset = () => {
    setCount(0)
    setText([])
  }

  return (
    <section className="form-section">
      <h1><ShowTools src={CodeImage4} />&nbsp;Lorem ipsum generator</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="html">Odstavec:</label>
        <input
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
          placeholder="Zadej počet odstavců"
        />
        <input type="submit" value="Vygenerovat" />
        <button onClick={formReset}>Resetovat</button>
      </form>

      {/*displaying the generated text */}
      <article className="paragraph">
        {
          text.map((oneText, index) => {
            return <p key={index}>{oneText}</p>
          })
        }
      </article>
    </section>
  )
}

export default GeneratorLoremIpsum