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
        <p>Demo projects to showcase various UI designs and use cases.</p>
      </div>
    </section>
  );
};

export default Hero;
