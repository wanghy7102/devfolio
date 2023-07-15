const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("img/home.jpg")`,
        }}
      >
        <div
          className="hero__overlay"
          style={{ background: "rgba(19, 41, 48, 0.6)" }}
        ></div>
      </div>

      <div className="wrap">
        <h1>Hi, I am Hong-Yi</h1>
        <p>
          I am a full-stack developer with more than 10 years of experience. How
          can i be of service?
        </p>

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
    </section>
  );
};

export default Hero;
