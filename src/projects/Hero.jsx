const Hero = () => {
  return (
    <section className="hero hero--single">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("img/projects.jpg")`,
        }}
      >
        <div className="hero__overlay"></div>
      </div>

      <div className="wrap">
        <h1>Projects</h1>
        <p>
          To showcase my web development skills, I’ve created several demo
          projects that demonstrate my UX design and frontend development
          abilities.
        </p>
      </div>
    </section>
  );
};

export default Hero;
