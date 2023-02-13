import { Link } from "react-router-dom";

import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiTwotoneExperiment } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient navfoot">
      <div className="container-fluid">
        {/* when collapse, this is gonna stay visible */}
        <span className="navbar-brand text-white btn-lg fs-3 ms-1 border bg-dark">
          {<AiTwotoneExperiment />}
        </span>
        <button
          className="navbar-toggler link-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-2">{<GiHamburgerMenu />}</span>
        </button>
        {/* until here */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto">
            <li className="nav-item ">
              <Link
                to="about"
                className="nav-link active text-white h4 rounded m-2 p-2"
                aria-aria-current="page"
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                className="nav-link text-white h4 rounded m-2 p-2"
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link text-white h4 rounded m-2 p-2"
              >
                contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="dropdown-toggle link-secondary bg-transparent m-2 p-2 border-0 nav-link h4"
                role="button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                social
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link
                    to="https://www.linkedin.com/in/rafaelafsinacio/?locale=en_US"
                    className="dropdown-item"
                    target="_blank"
                  >
                    {<AiFillLinkedin />} Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/rafafsi"
                    className="dropdown-item"
                    target="_blank"
                  >
                    {<FaGithubSquare />} GitHub
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
