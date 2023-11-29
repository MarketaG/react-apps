import { useRef, useState } from "react"
import "./TrainUseRef.css"
import ShowTools from "../components/ShowTools"
import CodeImage1 from "../images/code_1.png"
import CodeImage2 from "../images/code_2.png"
import CodeImage3 from "../images/code_3.png"

const TrainUseRef = () => {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0)
  const refInput = useRef(null)
  const refHeading = useRef(null)
  const refLink = useRef(null)

  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)

  // link list definition
  const links = [
    { href: "https://github.com/", text: "GITHUB" },
    { href: "https://www.seznam.cz", text: "SEZNAM" },
    { href: "https://www.alza.cz/", text: "ALZA" },
    { href: "https://www.google.com", text: "GOOGLE" },
    { href: "https://www.facebook.com", text: "FACEBOOK" },
    { href: "https://www.twitter.com", text: "TWITTER" },
  ];

  const formSubmit = (event) => {
    event.preventDefault()
    // console.log(refInput.current.value)
    // console.log(refInput.current.style.backgroundColor = "red")
    // console.log(refInput.current.style.color = "white")
    // console.log(refHeading.current.style.color = "orange")
    // console.log(refHeading.current.textContent = "Nový text")
    refInput.current.style.backgroundColor = "green"
    refInput.current.value = ""
    refInput.current.placeholder = "Odesláno"
  }

  const handleLinkChange = () => {
    // change the index to the next link
    setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);

    // update link and text in refLink
    refLink.current.href = links[currentLinkIndex].href;
    refLink.current.textContent = links[currentLinkIndex].text;
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = nameInputRef.current.value
    const email = emailInputRef.current.value

    //part of the code for options to perform operations with values from the form
    //display values from the form to the console
    console.log(`Jméno: ${name}, Email: ${email}`)

    //clearing value form fields
    nameInputRef.current.value = ''
    emailInputRef.current.value = ''
  }

  return <div className="useref-wrapper">
    <h1 ref={refHeading}>Trénink s useRef</h1>
    <div>
      <form className="useref-form" onSubmit={formSubmit}>
        <div>
          <label htmlFor=""><ShowTools src={CodeImage1} /></label>
          <input type="text" ref={refInput} placeholder="Napiš text a odešli.." />
        </div>
        <input type="submit" />
        <label htmlFor=""><ShowTools src={CodeImage2} /></label>
        <input type="button" value="Změnit odkaz" onClick={handleLinkChange} />
        <a href="https://www.google.com/" ref={refLink}>GOOGLE</a>
      </form>
    </div>
    <div>
      <form className="useref-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""><ShowTools src={CodeImage3} /></label>
          <input type="text" id="name" ref={nameInputRef} placeholder="Jméno..." />
        </div>
        <div>
          <input type="email" id="email" ref={emailInputRef} placeholder="Email..." />
        </div>
        <input type="submit" />
      </form>
    </div>

  </div>
}

export default TrainUseRef