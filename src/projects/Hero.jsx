const Hero = () => {
  return (
    <section className="hero hero--single">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("https://d1qmdf3vop2l07.cloudfront.net/yellow-sage.cloudvent.net/hash-store/fda0ca9d5e10c6bf184e3b6bbc44a668.jpg")`,
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
