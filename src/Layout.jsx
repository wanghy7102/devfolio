import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <Link to="/" className="header__title cc-active">
            Hong-Yi's Devfolio
          </Link>
          <div className="menu">
            <div className="menu__toggle js-menu-toggle">
              <div className="menu__toggle__icon">
                <span></span>
              </div>
            </div>
            <div className="menu__wrap">
              <ul className="menu__list">
                <li className="menu__list__item">
                  <a href="/about" className="menu__list__item__link">
                    About
                  </a>
                </li>
                <li className="menu__list__item">
                  <a
                    href="/projects"
                    className="menu__list__item__link cc-active"
                  >
                    Projects
                  </a>
                </li>
                <li className="menu__list__item">
                  <a href="/contact" className="menu__list__item__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="wrap">
          <p className="footer__text">
            Please don’t hesitate to reach out by clicking the Contact link on
            the top right.
          </p>

          <ul className="socials">
            <li className="socials__item">
              <a
                href="https://www.linkedin.com/in/wanghy2007"
                target="_blank"
                className="socials__item__link"
                title="Linkedin"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="https://github.com/wanghy7102"
                target="_blank"
                className="socials__item__link"
                title="Github"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
