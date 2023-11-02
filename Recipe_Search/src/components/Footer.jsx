import { CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <CardFooter className="footer">
        <div className="inner-footer">
        <div>
          Anne Marie :
          <a href="https://www.linkedin.com/in/amlewiscodes/" target="_blank"className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              bounce
              size="xl"
              style={{ color: "#ff0000" }}
            />
          </a>
          <a href="https://github.com/annemarielewis" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              shake
              size="xl"
              style={{ color: "#ff0000" }}
            />
          </a>
        </div>

        <div>
            Darcy :
          <a href="https://www.linkedin.com/in/darcystruble/" target="_blank"className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              bounce
              size="xl"
              style={{ color: "#00ff00" }}
            />
          </a>
          <a href="https://github.com/darcystruble" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              shake
              size="xl"
              style={{ color: "#00ff00" }}
            />
          </a>
        </div>

        <div>
          Josh :
          <a href="https://www.linkedin.com/in/josh-g-hutchison/" target="_blank" className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              bounce
              size="xl"
              style={{ color: "#ffff00" }}
            />
          </a>
          <a href="https://github.com/JoshHutchison" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              shake
              size="xl"
              style={{ color: "#ffff00" }}
            />
          </a>
        </div>

        </div>
        <div className="inner-footer">
        <div className="footer-section">
            
            <ul>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Articles</a></li>
            </ul>
          </div>
          <div className="footer-section">
            
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div className="footer-section">
            
            <ul>
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">Twitter</a></li>
              <li><a href="#" target="_blank">Instagram</a></li>
            </ul>
          </div>
          </div>
      </CardFooter>
    </div>
  );
}
