const Hero = () => {
  return (
    <section className="hero hero--single">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("img/about.jpg")`,
        }}
      >
        <div className="hero__overlay"></div>
      </div>

      <div className="wrap">
        <h1>About me</h1>
        <p>
          Personal is the perfect theme for developers, designers and other
          creatives.
        </p>
      </div>
    </section>
  );
};

export default Hero;
