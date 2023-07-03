const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("https://d1qmdf3vop2l07.cloudfront.net/yellow-sage.cloudvent.net/hash-store/e9b19c82eef5a91b912144fae43d86a5.jpg")`,
        }}
      >
        <div className="hero__overlay"></div>
      </div>

      <div className="wrap">
        <h1>A sleek, modern Jekyll theme for personal websites</h1>
        <p>
          Personal is the perfect theme for developers, designers and other
          creatives.
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
