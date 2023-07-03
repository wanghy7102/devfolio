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
        <h1>Oops, something went wrong</h1>
        <p>Sorry for the inconvenience. Please try again later.</p>
      </div>
    </section>
  );
};

export default Hero;
