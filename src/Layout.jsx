import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <Link to="/" className="header__title cc-active">
            Personal
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
                  <a href="/" className="menu__list__item__link cc-active">
                    Projects
                  </a>
                </li>
                <li className="menu__list__item">
                  <a href="/about" className="menu__list__item__link">
                    About
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
            A sleek, modern Jekyll theme for personal websites.
          </p>

          <div className="footer__copyright">
            <span>© 2020 Personal</span>
            <a href="https://jekyllthemes.io" target="_blank">
              Jekyll Themes
            </a>
          </div>

          <ul className="socials">
            <li className="socials__item">
              <a
                href="https://www.facebook.com/jekyllthemes/"
                target="_blank"
                className="socials__item__link"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="https://twitter.com/jekyllthemesio"
                target="_blank"
                className="socials__item__link"
                title="Twitter"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="http://instagram.com"
                target="_blank"
                className="socials__item__link"
                title="Instagram"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="https://medium.com/"
                target="_blank"
                className="socials__item__link"
                title="Medium"
              >
                <i className="fab fa-medium" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="https://www.quora.com/"
                target="_blank"
                className="socials__item__link"
                title="Quora"
              >
                <i className="fab fa-quora" aria-hidden="true"></i>
              </a>
            </li>

            <li className="socials__item">
              <a
                href="https://github.com/"
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
