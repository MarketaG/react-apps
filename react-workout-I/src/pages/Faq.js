import questions from "../data/dataFaq"
import Question from "../components/Question"
import "./Faq.css"

const Faq = () => {
  return (
    <div className="all-questions">
      {
        questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id} {...oneQuestion} />
        })
      }
    </div>

  )
}

export default Faq