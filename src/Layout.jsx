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
    </>
  );
};

export default Layout;
