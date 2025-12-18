import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoT from '../../assets/images/teaghan-logo.png'
import LogoSubtitle from '../../assets/images/teaghan-subtitle.png'
import { faEnvelope, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoT} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="teaghan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>


    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel='noreferrer'
          href="https://github.com/teaghanjohnson"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel='noreferrer'
          href="https://www.linkedin.com/in/teaghan-johnson-510b95324/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

    </ul>
  </div >
)

export default Sidebar