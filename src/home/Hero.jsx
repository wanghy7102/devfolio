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
          I’m a full-stack developer with 10+ years of experience. I specialize
          in Azure cloud development, and I’m passionate about creating
          beautiful, functional websites that help businesses grow.
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
    </section>
  );
};

export default Hero;
