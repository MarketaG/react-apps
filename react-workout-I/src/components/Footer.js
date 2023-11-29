import "./Footer.css"
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom"

const Footer = () => {
  return <footer>
    <div className="footer-wrapper">
      <div className="footer-row">
        <div className="footer-col">
          <h4>React workout</h4>
          <ul>
            <li><Link to="/">Domů</Link></li>
            <li><Link to="/movies">Filmy</Link></li>
            <li><Link to="/slider">Posuvník filmů</Link></li>
            <li><Link to="/generator">Generátor lorem ipsum</Link></li>
            <li><Link to="/trainuseref">Hook useRef</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontakt</h4>
          <div>
            <Link to="https://github.com/MarketaG/react-apps/tree/main/react-workout-I" target="_blank"><AiFillGithub className="footer-icons" /></Link>
            <Link to="/"><AiFillLinkedin className="footer-icons" /></Link>
          </div>
        </div>
      </div>
      <span className="footer-copyright">&copy;&nbsp;2023 Markéta G</span>

    </div>
  </footer>
}

export default Footer
