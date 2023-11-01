import { CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <CardFooter className="footer">
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
      </CardFooter>
    </div>
  );
}
