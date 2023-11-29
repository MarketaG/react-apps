import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import linksNav from "../data/dataNavbar"
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return <header>
    <nav>
      <div className="navigation">
        <div className="nav-header">
          <NavLink to="/" ><img src={logo} alt="" /></NavLink>
          <button onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
        <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
          <ul>
            {linksNav.map((oneLink) => {
              const { id, text, url } = oneLink;

              return (
                <li key={id}>
                  <NavLink
                    to={url}
                    className={`nav-link ${showMenu ? "activeLink" : "nonactiveLink"}`}
                    activeclassname="activeLink"
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>


      </div>
    </nav>
  </header>
}

export default Navbar