import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


import './Footer.scss'

export default function Footer() {


    return (


        <div className="footer">
            <div className="footer-contain">
                <a href="https://www.instagram.com/davidberdiell/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/david-berdiell-s%C3%A1nchez-3aab9a204/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a href="https://github.com/tapuks" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </div>
        </div>

    )
}